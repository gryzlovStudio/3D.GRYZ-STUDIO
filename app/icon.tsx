import { ImageResponse } from 'next/og'

// Размер иконки
export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

// Генерируем favicon (как в Header)
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #6B2AFF 0%, #FF6B9D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          borderRadius: '6px',
        }}
      >
        3D
      </div>
    ),
    {
      ...size,
    }
  )
}
