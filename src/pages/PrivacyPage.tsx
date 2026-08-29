import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ArrowLeft, ShieldCheck, Lock, Eye, AlertCircle, Phone, MapPin } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#050507] overflow-x-hidden w-full">
      {/* Ambient background glows */}
      <div className="fixed top-24 left-1/3 w-96 h-96 bg-neon-pink/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-24 right-1/3 w-96 h-96 bg-[#08CEFD]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted hover:text-[#08CEFD] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>На главную</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#08CEFD] mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>ОФИЦИАЛЬНЫЙ ДОКУМЕНТ</span>
          </div>

          <h1
            className="font-display font-black text-white tracking-tight uppercase leading-[0.95] break-words hyphens-auto"
            style={{ fontSize: 'clamp(24px, 6vw, 52px)' }}
          >
            ПОЛИТИКА <br className="sm:hidden" />
            <span className="text-neon-gradient">КОНФИДЕНЦИАЛЬНОСТИ</span>
          </h1>

          <p className="mt-4 text-xs sm:text-base text-text-secondary leading-relaxed break-words">
            Положение об обработке и защите персональных данных гостей караоке-бара <strong>#ГРОМКО</strong> (г. Иваново, ул. 10 Августа, 43).
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 sm:space-y-8 text-xs sm:text-base text-text-secondary leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <Eye className="w-5 h-5 text-[#08CEFD]" />
              <h2>1. Общие положения</h2>
            </div>
            <p className="text-text-secondary mb-3">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации о физических лицах (далее — «Пользователи»), пользующихся сайтом караоке-бара <strong>#ГРОМКО</strong> и сервисом онлайн-бронирования столиков.
            </p>
            <p className="text-text-secondary">
              Использование сервисов сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <Lock className="w-5 h-5 text-neon-pink" />
              <h2>2. Состав собираемой информации и цели сбора</h2>
            </div>
            <p className="text-text-secondary mb-3">
              При отправке заявки на бронирование стола через форму на сайте заведение собирает следующие данные:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-text-secondary mb-3">
              <li>Имя и фамилия гостя;</li>
              <li>Контактный номер телефона для подтверждения бронирования;</li>
              <li>Желаемая дата, время визита и количество гостей;</li>
              <li>Комментарии и пожелания по рассадке (при наличии).</li>
            </ul>
            <p className="text-text-secondary">
              Данная информация используется исключительно для бронирования столика, связи с гостем, информирования о статусе брони и повышения качества обслуживания.
            </p>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <ShieldCheck className="w-5 h-5 text-[#08CEFD]" />
              <h2>3. Защита и конфиденциальность данных</h2>
            </div>
            <p className="text-text-secondary mb-3">
              Мы принимаем все необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения.
            </p>
            <p className="text-text-secondary">
              Персональные данные гостей <strong>не передаются третьим лицам</strong>, за исключением случаев, прямо предусмотренных действующим законодательством Российской Федерации.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <AlertCircle className="w-5 h-5 text-neon-pink" />
              <h2>4. Возрастные ограничения и правила посещения (18+)</h2>
            </div>
            <p className="text-text-secondary mb-3">
              Караоке-бар <strong>#ГРОМКО</strong> является заведением с возрастным ограничением <strong>18+</strong>. Вход в заведение осуществляется при предъявлении документа, удостоверяющего личность (паспорт, водительское удостоверение).
            </p>
            <p className="text-text-secondary">
              В клубе действует внутренний регламент, дресс-код и правила безопасного пребывания всех гостей.
            </p>
          </section>

          {/* Section 5: Contacts */}
          <section className="p-6 sm:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <h2 className="text-white font-display font-bold text-lg mb-4">5. Контакты и реквизиты</h2>
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#08CEFD] flex-shrink-0" />
                <span>{VENUE_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4 text-neon-pink flex-shrink-0" />
                <a href={`tel:${VENUE_INFO.phoneRaw}`} className="hover:text-neon-pink transition-colors">
                  {VENUE_INFO.phone}
                </a>
              </div>
              <div className="text-text-muted text-xs pt-2">
                Режим работы: {VENUE_INFO.workingHours}
              </div>
            </div>
          </section>
        </div>

        {/* Back Button Bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
          >
            ← Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
};
