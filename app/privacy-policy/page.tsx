import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8">
            Политика <span className="gradient-text">конфиденциальности</span>
          </h1>
          <p className="text-text-muted text-sm mb-12">
            Дата последнего обновления: 26 декабря 2025 года
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            {/* Section 1 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                1. Общие положения
              </h2>
              <p className="mb-4">
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сайта 3D.GRYZ (далее — «Сайт»).
              </p>
              <p className="mb-4">
                Администрация Сайта уважает права посетителей и обеспечивает защиту всех предоставленных персональных данных в соответствии с Федеральным законом РФ № 152-ФЗ «О персональных данных» от 27.07.2006 года.
              </p>
              <p>
                Используя Сайт, вы подтверждаете свое согласие с условиями настоящей Политики. Если вы не согласны с условиями Политики, пожалуйста, не используйте Сайт.
              </p>
            </div>

            {/* Section 2 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                2. Какие данные мы собираем
              </h2>
              <p className="mb-4">
                При использовании Сайта мы можем собирать следующие категории персональных данных:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Имя и контактная информация (email, телефон, Telegram)</li>
                <li>Информация о запросах на создание 3D-контента</li>
                <li>IP-адрес и данные об устройстве</li>
                <li>Информация о посещенных страницах и действиях на Сайте</li>
                <li>Файлы-референсы, загруженные вами при заполнении форм</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                3. Цели обработки данных
              </h2>
              <p className="mb-4">
                Мы используем ваши персональные данные в следующих целях:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Предоставление услуг по созданию 3D-контента</li>
                <li>Связь с вами по вопросам заказов и консультаций</li>
                <li>Улучшение качества сервиса и пользовательского опыта</li>
                <li>Выполнение обязательств по договорам</li>
                <li>Информирование о новых услугах и предложениях (с вашего согласия)</li>
                <li>Анализ и статистика использования Сайта</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                4. Правовые основания обработки данных
              </h2>
              <p className="mb-4">
                Обработка персональных данных осуществляется на основании:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Вашего добровольного согласия на обработку персональных данных</li>
                <li>Необходимости исполнения договора, стороной которого вы являетесь</li>
                <li>Требований законодательства Российской Федерации</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                5. Защита данных
              </h2>
              <p className="mb-4">
                Мы принимаем необходимые организационные и технические меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения, включая:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Использование защищенных серверов и шифрования данных</li>
                <li>Ограничение доступа к персональным данным</li>
                <li>Регулярный мониторинг систем безопасности</li>
                <li>Обучение сотрудников правилам обработки персональных данных</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                6. Передача данных третьим лицам
              </h2>
              <p className="mb-4">
                Мы не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Вы дали явное согласие на такую передачу</li>
                <li>Передача необходима для предоставления запрошенных услуг</li>
                <li>Передача требуется по закону или для защиты наших прав</li>
                <li>Передача осуществляется подрядчикам, обязанным соблюдать конфиденциальность</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                7. Ваши права
              </h2>
              <p className="mb-4">
                В отношении ваших персональных данных вы имеете следующие права:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Право на получение информации об обработке ваших данных</li>
                <li>Право на доступ к вашим персональным данным</li>
                <li>Право на исправление неточных данных</li>
                <li>Право на удаление данных («право на забвение»)</li>
                <li>Право на ограничение обработки данных</li>
                <li>Право на отзыв согласия на обработку данных</li>
                <li>Право на подачу жалобы в надзорный орган</li>
              </ul>
              <p className="mt-4">
                Для реализации своих прав обратитесь к нам по адресу: gryzlovstudio@gmail.com
              </p>
            </div>

            {/* Section 8 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                8. Cookies и аналитика
              </h2>
              <p className="mb-4">
                Сайт использует файлы cookie для улучшения работы и анализа посещаемости. Cookie — это небольшие текстовые файлы, которые хранятся на вашем устройстве.
              </p>
              <p>
                Вы можете настроить свой браузер для отказа от cookie, но это может ограничить функциональность Сайта.
              </p>
            </div>

            {/* Section 9 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                9. Изменения в Политике
              </h2>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую Политику. Новая редакция Политики вступает в силу с момента ее размещения на Сайте. Рекомендуем регулярно проверять данную страницу для ознакомления с актуальной версией Политики.
              </p>
            </div>

            {/* Section 10 */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold uppercase mb-4 text-accent-lime">
                10. Контактная информация
              </h2>
              <p className="mb-4">
                Если у вас есть вопросы относительно настоящей Политики конфиденциальности или обработки ваших персональных данных, свяжитесь с нами:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> gryzlovstudio@gmail.com</li>
                <li><strong>Telegram:</strong> @ddd_gryz</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
