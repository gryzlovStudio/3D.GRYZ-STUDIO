import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_IDS?.split(',') || []

async function sendTelegramMessage(chatId: string, message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }),
  })

  return response.json()
}

async function sendTelegramPhoto(chatId: string, photo: File, caption?: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`

  const formData = new FormData()
  formData.append('chat_id', chatId)
  formData.append('photo', photo)
  if (caption) {
    formData.append('caption', caption)
  }

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  return response.json()
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const description = formData.get('description') as string
    const style = formData.get('style') as string
    const name = formData.get('name') as string
    const contact = formData.get('contact') as string

    // Получаем все файлы
    const files: File[] = []
    formData.forEach((value, key) => {
      if (key.startsWith('reference_') && value instanceof File) {
        files.push(value)
      }
    })

    // Форматируем сообщение
    const styleLabels: Record<string, string> = {
      realistic: 'Фотореалистичный',
      stylized: 'Стилизованный',
      cartoon: 'Мультяшный',
    }

    const message = `
🎨 <b>Новая заявка на концепт!</b>

👤 <b>Имя:</b> ${name}
📞 <b>Контакт:</b> ${contact}

🎭 <b>Стиль:</b> ${styleLabels[style] || style}

📝 <b>Описание идеи:</b>
${description}

📎 <b>Референсов:</b> ${files.length}

⏰ <i>${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</i>
`.trim()

    // Отправляем текстовое сообщение всем получателям
    const messageResults = await Promise.all(
      TELEGRAM_CHAT_IDS.map(chatId => sendTelegramMessage(chatId.trim(), message))
    )

    // Отправляем фотографии всем получателям
    if (files.length > 0) {
      for (const chatId of TELEGRAM_CHAT_IDS) {
        for (let i = 0; i < files.length; i++) {
          const caption = i === 0 ? `Референс от ${name}` : undefined
          await sendTelegramPhoto(chatId.trim(), files[i], caption)
        }
      }
    }

    const allSuccess = messageResults.every(r => r.ok)

    if (allSuccess) {
      return NextResponse.json({ success: true })
    } else {
      console.error('Telegram API errors:', messageResults)
      return NextResponse.json({ success: false, error: 'Failed to send some messages' }, { status: 500 })
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
