import React from "react";
import { useRouter } from "../context/RouterContext";
import {
  ArrowLeft,
  ShieldCheck,
  Eye,
  Phone,
  MapPin,
  CalendarClock,
  Mic2,
  Music2,
  AlertOctagon,
  Sparkles,
} from "lucide-react";
import { VENUE_INFO } from "../data";

export const PrivacyPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#050507] overflow-x-hidden w-full">
      {/* Ambient background glows */}
      <div className="fixed top-24 left-1/3 w-96 h-96 bg-neon-pink/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-24 right-1/3 w-96 h-96 bg-[#08CEFD]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 lg:px-0 relative z-10 w-full">
        {/* Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted hover:text-[#08CEFD] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>На главную</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-white/10">
          <h1
            className="font-display font-black text-white tracking-tight uppercase leading-[0.95] break-words hyphens-auto"
            style={{ fontSize: "clamp(24px, 6vw, 52px)" }}
          >
            <span className="text-neon-gradient">
              ПОЛИТИКА КОНФЕДЕНЦИАЛЬНОСТИ{" "}
            </span>
            <br />И ПРАВИЛА ПОСЕЩЕНИЯ
          </h1>

          <p className="mt-4 text-xs sm:text-base text-text-secondary leading-relaxed break-words">
            Официальные правила посещения караоке-клуба <strong>#ГРОМКО</strong>{" "}
            (г. Иваново, ул. 10 Августа, 43) и положение об обработке
            персональных данных.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-6 sm:space-y-8 text-xs sm:text-base text-text-secondary leading-relaxed font-sans">
          {/* Rules Section 1: Бронирование столов */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <CalendarClock className="w-5 h-5 text-neon-pink" />
              <h2>1. Бронирование столов и продление работы</h2>
            </div>
            <ul className="space-y-2.5 pl-1 text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Бронирование столов возможно до <strong>00:00</strong>. После
                  00:00 бронирование происходит по предварительной оплате.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Если вы без предупреждения задерживаетесь более чем на{" "}
                  <strong>30 минут</strong>, бронь снимается.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  <strong>Продление работы залов:</strong>{" "}
                  <span className="text-white font-semibold">
                    10 000 руб./час
                  </span>{" "}
                  (время обговаривается заранее).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  В караоке-клубе действует расчетный час в{" "}
                  <strong>01:00</strong> и <strong>05:00</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Администрация клуба вправе закрыть заведение раньше указанного
                  времени при отсутствии гостей.
                </span>
              </li>
            </ul>
          </section>

          {/* Rules Section 2: Дресс-код, фейсконтроль и правила входа (18+) */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <ShieldCheck className="w-5 h-5 text-[#08CEFD]" />
              <h2>2. Дресс-код, фейсконтроль и правила входа (18+)</h2>
            </div>
            <ul className="space-y-2.5 pl-1 text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  В клубе действует <strong>dress-code</strong> и{" "}
                  <strong>face-control</strong>. Запрещен вход в спортивной
                  одежде, а также посетителям неопрятного вида.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Администрация клуба в лице сотрудников охраны оставляет за
                  собой право оценивать соответствие внешнего вида посетителей
                  формату и имиджу заведения.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  <strong>Вход лицам, не достигшим 18 лет — запрещен.</strong>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  <strong>
                    Вход со своим алкоголем (напитками, едой, закусками и т.д.)
                    — запрещен.
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  В наш клуб запрещено проносить с собой любое оружие, колющие и
                  режущие предметы.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Запрещен вход в клуб в состоянии сильного алкогольного или
                  наркотического опьянения. Администрация клуба в лице
                  сотрудников охраны оставляет за собой право оценивать Ваше
                  состояние.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Администрация клуба в лице сотрудников охраны вправе
                  досматривать сумки, пакеты, рюкзаки и т.д. и предложить на
                  время посещения заведения сдать их в гардероб, за исключением
                  женских сумочек.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Администрация клуба в лице сотрудников охраны имеет право без
                  объяснения причин отказать в обслуживании / посещении.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Администрация клуба не несет ответственности за ценные вещи,
                  оставленные в гардеробе.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Уважаемые гости, в целях Вашей безопасности на территории
                  ведется видеонаблюдение.
                </span>
              </li>
            </ul>
          </section>

          {/* Rules Section 3: Очередь и порядок исполнения песен */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <Mic2 className="w-5 h-5 text-neon-pink" />
              <h2>3. Очередь и исполнение песен</h2>
            </div>
            <ul className="space-y-2.5 pl-1 text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Исполнение песен проходит в порядке очереди:{" "}
                  <strong>по две песни на стол</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Если за одним столом сидят люди из разных компаний, от стола
                  все равно исполняется только две песни.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Если по каким-либо причинам ко времени вашего исполнения вы
                  отсутствовали за столом, право очереди перейдет к следующему
                  столу и вернется к вам только через круг.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  <strong>Исполнение песни вне очереди:</strong> если вы очень
                  торопитесь и желаете исполнить песню вне очереди, вы можете
                  приобрести данное право за{" "}
                  <span className="text-neon-cyan font-bold">1500 руб.</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Песня, спетая длительностью больше 1 мин, считается
                  исполненной.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Если вы пересели за другой стол к другу (подруге), то
                  автоматически теряете право исполнения песни от своего стола.
                  Возвращение к пустующему столу на время своей очереди не
                  считается присутствием за столом.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Во время исполнения песни другим гостем не разрешается
                  подпевать в микрофон без одобрения самого поющего.
                </span>
              </li>
            </ul>
          </section>

          {/* Rules Section 4: Заказ песен и репертуар */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <Music2 className="w-5 h-5 text-[#08CEFD]" />
              <h2>4. Заказ песен и репертуар</h2>
            </div>
            <ul className="space-y-2.5 pl-1 text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Заказать исполнение песни Вы можете через приложение, скачав
                  его на ваше портативное устройство (гаджет), или же
                  обратившись к звукооператору.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Если вы не можете найти желаемую песню в каталоге,
                  звукооператор может помочь вам путем поиска по словам из песни
                  или ее названию.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Если от стола не исполняется песня, то эту очередь может взять
                  бэк-вокалист(ка) или звукорежиссер для исполнения песни.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  <strong>
                    В зале запрещено исполнять песни из репертуара «блатного»
                    шансона, песен с ненормативной лексикой!
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#08CEFD] font-bold mt-0.5">•</span>
                <span>
                  Администрация имеет право отказать в очереди исполнения песни
                  в случае сильного алкогольного опьянения или же в выборе
                  нецензурной песни.
                </span>
              </li>
            </ul>
          </section>

          {/* Rules Section 5: Поведение, порядок и конфликт-меню */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <AlertOctagon className="w-5 h-5 text-neon-pink" />
              <h2>5. Поведение гостей, безопасность и конфликт-меню</h2>
            </div>
            <ul className="space-y-2.5 pl-1 text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  В нашем клубе запрещается употребление нецензурных слов или
                  любых высказываний, которые могут обидеть других гостей или
                  персонал клуба.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  Запрещается проявление агрессии по отношению к другим гостям
                  или персоналу клуба.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  В случае чрезмерного увлечения алкоголем, повлекшим за собой
                  принятие Вами горизонтального положения, администрация клуба в
                  лице сотрудников охраны будет вынуждена вывести Вас из
                  заведения.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  В случае нарушения гостями клуба вышеперечисленных правил
                  администрация оставляет за собой право отказа в посещении или
                  нахождении в клубе,{" "}
                  <strong>что не освобождает от оплаты счета</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  <strong>Случайное падение микрофона:</strong> компенсация
                  клубу в размере <strong>3 000 руб.</strong> (при условии, что
                  микрофон работает).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  <strong>Вывод микрофона из строя:</strong> падение,
                  раскручивание, разбор на запчасти и другие несанкционированные
                  действия — <strong>~ 20 000 рублей</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neon-pink font-bold mt-0.5">•</span>
                <span>
                  За порчу имущества, принадлежащего клубу, сумму компенсации
                  определяет администрация согласно конфликт-меню.
                </span>
              </li>
            </ul>
          </section>

          {/* Rules Section 6: Политика обработки персональных данных */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-3">
              <Eye className="w-5 h-5 text-[#08CEFD]" />
              <h2>6. Политика конфиденциальности и защита данных</h2>
            </div>
            <p className="text-text-secondary mb-3">
              Настоящая Политика определяет порядок обработки и защиты
              персональной информации о физических лицах, пользующихся сайтом
              караоке-бара <strong>#ГРОМКО</strong> и сервисом
              онлайн-бронирования столиков.
            </p>
            <p className="text-text-secondary mb-3">
              При отправке заявки на бронирование стола заведение собирает имя,
              контактный телефон, дату/время визита и комментарии гостя
              исключительно в целях бронирования столика и связи с гостем.
            </p>
            <p className="text-text-secondary">
              Персональные данные <strong>не передаются третьим лицам</strong>,
              за исключением случаев, предусмотренных законодательством РФ.
            </p>
          </section>

          {/* Wish banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-neon-pink/10 via-surface to-[#08CEFD]/10 border border-white/10 text-center">
            <Sparkles className="w-5 h-5 text-[#08CEFD] mx-auto mb-2" />
            <div className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-wider">
              Желаем вам приятного отдыха!
            </div>
            <p className="mt-1 text-xs sm:text-sm text-text-secondary">
              Надеемся на понимание и соблюдение правил караоке.
            </p>
          </div>

          {/* Section 7: Contacts & Legal info */}
          <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/5">
            <h2 className="text-white font-display font-bold text-lg mb-4">
              7. Реквизиты и контакты
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <div className="text-white font-semibold">
                  {VENUE_INFO.legalEntity?.name || 'ООО "Палладиум"'}
                </div>
                <div className="font-mono text-text-secondary">
                  ИНН: {VENUE_INFO.legalEntity?.inn || "3702731952"}
                </div>
                <div className="font-mono text-text-secondary">
                  ОГРН: {VENUE_INFO.legalEntity?.ogrn || "1143702014466"}
                </div>
              </div>
              <div className="space-y-3 font-mono">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[#08CEFD] flex-shrink-0" />
                  <span>{VENUE_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4 text-neon-pink flex-shrink-0" />
                  <a
                    href={`tel:${VENUE_INFO.phoneRaw}`}
                    className="hover:text-neon-pink transition-colors"
                  >
                    {VENUE_INFO.phone}
                  </a>
                </div>
                <div className="text-text-muted text-xs pt-1 space-y-0.5">
                  <div>Режим работы:</div>
                  <div className="text-text-secondary">
                    ПН–ЧТ, ВС: 19:00 — 04:00
                  </div>
                  <div className="text-neon-cyan">ПТ–СБ: 19:00 — 06:00</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back Button Bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors border border-white/10 cursor-pointer"
          >
            ← Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
};
