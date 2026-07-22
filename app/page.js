'use client';

import { useEffect, useRef, useState } from 'react';

const content = {
  sr: {
    nav: {
      club: 'Klub',
      training: 'Trening',
      app: 'App',
      membership: 'Članstvo',
      apply: 'Prijava',
      label: 'Glavna navigacija',
    },
    hero: {
      eyebrow: 'VIŠE OD TRENINGA',
      title: 'Snaga, gracioznost, disciplina.',
      text: 'ÉLAN je privatni prostor za trening namenjen ženama koje žele da grade snagu u mirnom, fokusiranom i prefinjenom okruženju.',
      primary: 'Saznajte više',
      secondary: null,
    },
    statement: {
      kicker: 'ÉLAN',
      title: 'Drugačiji pristup treningu.',
      text: 'ÉLAN je zajednica žena koje ulažu u svoje zdravlje, snagu i kvalitet života. Prostor u kome su privatnost, kvalitet treninga i atmosfera podjednako važni kao i rezultati.',
      support:
        'Pažljivo vođeni treninzi uz stručnu podršku u mirnom okruženju koje vam omogućava da se u potpunosti posvetite sebi i svojim ciljevima.',
      note: 'Bez gužve. Bez čekanja na sprave. Bez univerzalnih programa.',
    },
    difference: {
      kicker: 'ÉLAN iskustvo',
      title: 'Bez buke. Bez gužve.',
      items: [
        {
          eyebrow: 'Limited Membership',
          title: 'Ograničen broj članica',
          text: 'Broj članica je namerno ograničen kako bi prostor ostao miran, pregledan i posvećen kvalitetu rada.',
        },
        {
          eyebrow: 'Guided Training',
          title: 'Vođeni treninzi',
          text: 'Svaki termin se odvija uz stručan nadzor trenera, jasnu strukturu i fokus na bezbedan napredak.',
        },
        {
          eyebrow: 'Individual Approach',
          title: 'Individualni programi',
          text: 'Program se prilagođava vašem iskustvu, ciljevima, tempu i individualnim potrebama.',
        },
        {
          eyebrow: 'Equipment',
          title: 'Savremena oprema',
          text: 'Oprema je birana da podrži funkcionalan, kvalitetan i precizan trening bez nepotrebnog čekanja.',
        },
        {
          eyebrow: 'The Space',
          title: 'Moderan prostor',
          text: 'Funkcionalan enterijer i pažljivo oblikovana atmosfera podržavaju disciplinu, fokus i doslednost.',
        },
        {
          eyebrow: 'The Team',
          title: 'Posvećen tim',
          text: 'Profesionalan tim prati trening proces, koriguje izvođenje i vodi vas kroz kontinuitet rada.',
        },
        {
          eyebrow: 'Booking',
          title: 'Jednostavno zakazivanje',
          text: 'Termini se organizuju unapred, jasno i pregledno, kako bi trening imao svoje mesto u vašem rasporedu.',
        },
        {
          eyebrow: 'Community',
          title: 'Zajednica žena',
          text: 'ÉLAN okuplja žene sa sličnim vrednostima, namerom i odnosom prema zdravlju, snazi i vremenu.',
        },
      ],
    },
    ease: {
      kicker: 'ELAN iskustvo',
      title: 'Bez buke. Bez gužve.',
      items: [
        'Ograničen broj članica',
        'Vođeni treninzi uz stručan nadzor',
        'Individualno prilagođeni programi',
        'Savremena oprema',
        'Moderan i funkcionalan prostor',
        'Profesionalan i posvećen tim',
        'Jednostavno zakazivanje termina',
        'Zajednica žena sa sličnim vrednostima',
      ],
    },
    trainingConcept: {
      kicker: 'KONCEPT TRENINGA',
      title: 'Individualan plan. Vođeni trening.',
      text: 'Svako članstvo počinje konsultacijama kako bismo razumeli Vaše ciljeve, trenutno stanje i mogućnosti. Na osnovu toga kreiramo plan treninga prilagođen isključivo Vama.',
      note: 'Treninzi se odvijaju u malim grupama uz stručno vođenje trenera, dok svaka članica prati svoj individualni program. Na taj način spajamo individualan pristup sa prednostima vođenog treninga u malim grupama.',
      items: [
        {
          kicker: 'INDIVIDUALNI PLAN',
          title: 'Plan treninga kreiran za vas.',
          text: 'Prilagođen vašim ciljevima, mogućnostima i tempu napretka.',
        },
        {
          kicker: 'VOĐENI TRENING',
          title: 'Trening koji prati vaš plan.',
          text: 'Male grupe, stručno vođenje i individualna pažnja na svakom treningu.',
        },
      ],
    },
    membership: {
      kicker: 'Rane prijave',
      title: 'Treniraj sada. Zadrži svoju cenu cele godine.',
      note:
        'Elan već živi svoj letnji ritam — treninzi su u toku, a prve članice imaju pristup posebnim Early Access uslovima pre zvaničnog otvaranja, 15. septembra 2026.',
      detail:
        'Paket koji izabereš sada zaključava promotivnu cenu tokom celog perioda tvoje članarine. Od 15. septembra važi zvanični cenovnik, a broj Early Access članstava je ograničen.',
      highlights:
        'Obezbedi svoj Elan Membership na vreme i postani deo zajednice koja kreće prva.',
      packagesLabel: 'Paketi',
      packagesNote: 'Svi paketi važe 30 dana.',
      imagePromo: {
        kicker: 'RANE PRIJAVE',
        title: 'Trenirajte sada. Zadržite posebnu cenu cele godine.',
        text: [
          'Elan već živi svoj letnji ritam — treninzi su u toku, a prve članice imaju pristup posebnim uslovima pre zvaničnog otvaranja, 15. septembra 2026.',
          'Članstvo aktivirano u ovom periodu zadržava početnu cenu tokom celog perioda aktivne članarine. Od 15. septembra važiće novi cenovnik.',
          'Broj članstava je ograničen kako bismo svakoj članici pružili pažnju koju zaslužuje.',
        ],
        highlight:
          'Članstvo aktivirano u ovom periodu zadržava početnu cenu tokom celog perioda aktivne članarine.',
        benefits: [],
        cta: 'Prijavite se za članstvo',
      },
      items: [
        {
          name: 'FOCUS',
          detail: '8 treninga mesečno',
          price: '20.000 RSD',
          description:
            'Za one koje žele kontinuitet i ravnotežu između treninga i svakodnevnih obaveza.',
        },
        {
          name: 'DISCIPLINE',
          detail: '10 treninga mesečno',
          price: '22.000 RSD',
          description:
            'Za one koje veruju da rezultati dolaze kroz doslednost i posvećen rad.',
        },
        {
          name: 'STRENGTH',
          detail: '12 treninga mesečno',
          price: '24.000 RSD',
          description:
            'Za one koje žele maksimalnu podršku, napredak i posvećenost svojim ciljevima.',
        },
        {
          name: 'DECISION',
          detail: 'Pojedinačni trening',
          price: '3.000 RSD',
          description:
            'Jedan vođeni trening za upoznavanje sa ÉLAN pristupom ili fokusiran rad na određenom cilju.',
        },
      ],
    },
    earlyAccess: {
      kicker: 'Članstvo',
      title: 'Ograničen broj članica',
      intro: 'Verujemo da kvalitet treninga počinje kvalitetom okruženja. Kako bismo svakoj članici pružili pažnju koju zaslužuje broj članova je ograničen.',
      text: null,
      note: null,
      benefits: [],
      cta: 'PRIJAVITE SE ZA ČLANSTVO',
    },
    space: {
      kicker: 'PROSTOR',
      title: 'Moderno dizajnirano okruženje za efikasan trening',
      text: 'Svaki detalj prostora pažljivo je biran kako bi stvorio okruženje koje inspiriše disciplinu, fokus i doslednost. Minimalistički enterijer, premium oprema i atmosfera koja omogućava da trening bude upravo ono što treba da bude — vreme posvećeno sebi.',
      panel: 'Boutique Training Environment',
    },
    audience: {
      kicker: 'Teretana na drugačiji način',
      title: 'Kreirano za žene.',
      text: 'Svaka klijentkinja prolazi kroz inicijalne konsultacije tokom kojih definišemo ciljeve, iskustvo i individualne potrebe. Na osnovu toga kreiramo plan treninga koji se prilagođava vašem tempu, mogućnostima i željenim rezultatima.',
      items: [
        'Ograničen broj članica',
        'Vođeni treninzi',
        'Individualan pristup',
        'Privatno okruženje za trening',
        'Okruženje namenjeno ženama',
      ],
    },
    bookingPolicy: {
      kicker: 'Pravila zakazivanja',
      title: 'Planirano. Fleksibilno. Jednostavno.',
      items: [
        'Vaši termini rezervišu se prilikom učlanjenja, u skladu sa Vašim rasporedom i ritmom života.',
        'Ukoliko niste u mogućnosti da prisustvujete treningu, termin možete blagovremeno otkazati putem aplikacije.',
        'Blagovremeno otkazani trening ostaje Vam na raspolaganju i možete ga nadoknaditi u prvom dostupnom terminu kod svog trenera.',
        'Na taj način omogućavamo Vam veću fleksibilnost, uz organizaciju koja obezbeđuje kontinuitet i kvalitet svakog treninga.',
      ],
    },
    bookingApp: {
      kicker: 'ÉLAN APP',
      title: 'Zakazivanje uvek pri ruci.',
      text: 'Raspored treninga ostaje pregledan i jednostavan, uz diskretan pristup terminima i promenama kada je to potrebno.',
      steps: [
        'Preuzmite aplikaciju.',
        'Skenirajte QR kod u aplikaciji kako biste započeli registraciju.',
        'Kreirajte svoj nalog i upravljajte terminima jednostavno i u svakom trenutku.',
      ],
      codeLabel: 'Pređi za scan',
      links: [
        {
          label: 'App Store',
          href: 'https://apps.apple.com/us/app/gofitness-app/id6759954935',
        },
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.gofitness.mobile',
        },
      ],
    },
    membershipNote: {
      kicker: 'Članstvo',
      title: 'Ograničen broj članica',
      intro: 'Članstvo kreirano prema vašim ciljevima, tempu i napretku.',
      text:
        'Verujemo da kvalitet treninga počinje kvalitetom okruženja i zbog toga je broj članova ograničen. Članstvo je dostupno putem prijave.',
    },
    application: {
      kicker: 'PRIJAVE ZA ČLANSTVO',
      title: 'Vaš ÉLAN počinje ovde.',
      text: 'Svako članstvo počinje upoznavanjem.',
      note:
        'Podelite sa nama nekoliko osnovnih informacija, a mi ćemo vas kontaktirati kako bismo razgovarali o vašim ciljevima, predstavili ÉLAN koncept i odgovorili na sva pitanja u vezi sa članstvom.',
      name: 'Ime',
      email: 'Email',
      phone: 'Telefon',
      focus: 'Izaberite trening paket',
      focusPlaceholder: 'Nisam još odlučila',
      cta: 'Prijavite se za članstvo',
      submit: 'Prijavite se za članstvo',
      success: 'Prijava je poslata.',
      successTitle: 'Prijava je primljena.',
      successText:
        'Hvala na interesovanju za ÉLAN. Javićemo se uskoro sa sledećim koracima.',
      successClose: 'Zatvori',
      error: 'Slanje trenutno nije uspelo.',
    },
    promoPopup: {
      kicker: 'Dobro došli.',
      title: 'VAŠ ÉLAN POČINJE OVDE.',
      text: [
        'Pre nego što postanete član, pozivamo Vas da doživite kako izgleda trening u prostoru gde je fokus isključivo na Vama.',
        'Mirnije okruženje. Manje ljudi. Više pažnje.',
      ],
      highlight: 'Prijavite se za besplatan uvodni trening i upoznajte ÉLAN pristup.',
      name: 'Ime',
      email: 'Email',
      phone: 'Telefon',
      submit: 'Prijavite se',
      success: 'Prijava je poslata.',
      successText: 'Hvala. Javićemo se uskoro kako bismo dogovorili prvi trening.',
      error: 'Slanje trenutno nije uspelo.',
      close: 'Zatvori popup',
      focus: 'besplatan trening',
    },
    footer: {
      line: ['Women’s Private Gym', 'Focus · Discipline · Strength'],
      addressLabel: 'Lokacija',
      address: ['Ivankovačka 6', 'Beograd'],
      addressHref:
        'https://www.google.com/maps/place/%D0%98%D0%B2%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0%D1%87%D0%BA%D0%B0+6,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4/@44.8073383,20.4762225,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7a9895906a3f:0x1cc70b635f44c727!8m2!3d44.8073345!4d20.4787974!16s%2Fg%2F11kx26vptj?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D',
      phoneLabel: 'Kontakt',
      phone: '066 066 166',
      phoneHref: 'tel:+38166066166',
      email: 'hello@elanfit.rs',
      emailHref: 'mailto:hello@elanfit.rs',
      socialLabel: 'Društvene mreže',
    },
  },
  en: {
    nav: {
      club: 'Club',
      training: 'Training',
      app: 'App',
      membership: 'Membership',
      apply: 'Apply',
      label: 'Main navigation',
    },
    hero: {
      eyebrow: 'Beyond Training',
      title: 'Strength, Grace, Discipline.',
      text: 'ÉLAN is a private training space for women who want to build strength in a calm, focused and refined environment.',
      primary: 'Learn more',
      secondary: null,
    },
    statement: {
      kicker: 'ÉLAN',
      title: 'A different kind of gym.',
      text: 'ÉLAN is a community for women who invest in their health, strength and quality of life. A space where privacy, training quality and atmosphere matter as much as results.',
      support:
        'Carefully guided training with professional support in a calm environment that allows you to fully devote your attention to yourself and your goals.',
      note: 'No crowding. No waiting for equipment. No generic programs.',
    },
    difference: {
      kicker: 'The ÉLAN Experience',
      title: 'Not loud. Not crowded.',
      items: [
        {
          eyebrow: 'Limited Membership',
          title: 'Limited number of members',
          text: 'Membership is intentionally limited so the space stays calm, focused and dedicated to training quality.',
        },
        {
          eyebrow: 'Guided Training',
          title: 'Guided Training',
          text: 'Every appointment is guided by a trainer, with clear structure and focus on safe progress.',
        },
        {
          eyebrow: 'Individual Approach',
          title: 'Individual programs',
          text: 'Training plans are adapted to your experience, goals, rhythm and individual needs.',
        },
        {
          eyebrow: 'Equipment',
          title: 'Modern equipment',
          text: 'Equipment is selected to support functional, precise and high-quality training without unnecessary waiting.',
        },
        {
          eyebrow: 'The Space',
          title: 'Functional space',
          text: 'A modern interior and carefully shaped atmosphere support discipline, focus and consistency.',
        },
        {
          eyebrow: 'The Team',
          title: 'Dedicated team',
          text: 'A professional team follows the training process, corrects execution and guides long-term consistency.',
        },
        {
          eyebrow: 'Booking',
          title: 'Simple scheduling',
          text: 'Appointments are organised in advance, clearly and simply, so training fits your schedule.',
        },
        {
          eyebrow: 'Community',
          title: 'Shared values',
          text: 'ÉLAN brings together women with a similar approach to health, strength, intention and time.',
        },
      ],
    },
    ease: {
      kicker: 'THE ÉLAN EXPERIENCE',
      title: 'Not loud. Not crowded.',
      items: [
        'Limited number of members',
        'Guided training with professional supervision',
        'Individually adapted programs',
        'Modern equipment',
        'Modern and functional space',
        'Professional and dedicated team',
        'Simple appointment scheduling',
        'A community of women with similar values',
      ],
    },
    trainingConcept: {
      kicker: 'TRAINING CONCEPT',
      title: 'Individual plan. Guided training.',
      text: 'Every membership begins with a consultation so we can understand your goals, current condition and abilities. Based on that, we create a training plan tailored exclusively to you.',
      note: 'Training takes place in small groups with professional trainer guidance, while each member follows her individual program. This brings together an individual approach with the advantages of guided training in small groups.',
      items: [
        {
          kicker: 'INDIVIDUAL PLAN',
          title: 'A training plan created for you.',
          text: 'Adapted to your goals, abilities and pace of progress.',
        },
        {
          kicker: 'GUIDED TRAINING',
          title: 'Training that follows your plan.',
          text: 'Small groups, professional guidance and individual attention in every session.',
        },
      ],
    },
    membership: {
      kicker: 'Early Access',
      title: 'Train now. Keep your price all year.',
      note:
        'Elan is already moving in its summer rhythm. Training sessions are underway, and the first members have access to special Early Access terms before the official Grand Opening on September 15, 2026.',
      detail:
        'The package you choose now locks in the promotional price for the full duration of your membership. From September 15, the official price list applies, and the number of Early Access memberships is limited.',
      highlights:
        'Secure your Elan Membership in time and become part of the community that starts first.',
      packagesLabel: 'Packages',
      packagesNote: 'All packages are valid for 30 days.',
      imagePromo: {
        kicker: 'EARLY APPLICATIONS',
        title: 'Train now. Keep your special price all year.',
        text: [
          'Elan is already moving in its summer rhythm. Training sessions are underway, and the first members have access to special terms before the official opening on September 15, 2026.',
          'Membership activated during this period keeps its starting price for the full duration of the active membership. From September 15, a new price list will apply.',
          'The number of memberships is limited so we can give every member the attention she deserves.',
        ],
        highlight:
          'Membership activated during this period keeps its starting price for the full duration of the active membership.',
        benefits: [],
        cta: 'Apply for membership',
      },
      items: [
        {
          name: 'FOCUS',
          detail: '8 sessions per month',
          price: '20,000 RSD',
          description:
            'For those who want continuity and balance between training and everyday responsibilities.',
        },
        {
          name: 'DISCIPLINE',
          detail: '10 sessions per month',
          price: '22,000 RSD',
          description:
            'For those who believe results come through consistency and dedicated work.',
        },
        {
          name: 'STRENGTH',
          detail: '12 sessions per month',
          price: '24,000 RSD',
          description:
            'For those who want maximum support, progress and commitment to their goals.',
        },
        {
          name: 'DECISION',
          detail: 'Single session',
          price: '3,000 RSD',
          description:
            'One guided session for discovering the ÉLAN approach or focusing on a specific goal.',
        },
      ],
    },
    earlyAccess: {
      kicker: 'Membership',
      title: 'Limited Membership',
      intro: 'We believe training quality begins with the quality of the environment. To give every member the attention she deserves, the number of memberships is limited.',
      text: null,
      note: null,
      benefits: [],
      cta: 'Apply for membership',
    },
    space: {
      kicker: 'The Space',
      title: 'A modern designed environment for effective training.',
      text: 'Every detail of the space has been carefully chosen to create an environment that inspires discipline, focus and consistency. Minimal interiors, premium equipment and an atmosphere that allows training to be exactly what it should be — time dedicated to yourself.',
      panel: 'Boutique Training Environment',
    },
    audience: {
      kicker: 'Different kind of gym',
      title: 'Designed around women.',
      text: 'Every membership begins with a consultation designed to understand your goals, experience and lifestyle. From there, the ÉLAN approach stays personal, structured and focused on long-term progress.',
      items: [
        'Limited number of members',
        'Guided training',
        'Individual approach',
        'Private training environment',
        'Environment designed for women',
      ],
    },
    bookingPolicy: {
      kicker: 'BOOKING POLICY',
      title: 'Planned. Flexible. Simple.',
      items: [
        'Your appointments are reserved upon joining, in line with your schedule and rhythm of life.',
        'If you are unable to attend training, you can cancel the appointment in time through the app.',
        'A training session cancelled in time remains available to you and can be made up in the first available slot with your trainer.',
        'This gives you greater flexibility, with organisation that preserves continuity and the quality of every training session.',
      ],
    },
    bookingApp: {
      kicker: 'ÉLAN APP',
      title: 'Scheduling, always within reach.',
      text: 'Your training schedule stays clear and simple, with discreet access to appointments and changes when needed.',
      steps: [
        'Download the app.',
        'Scan the QR code in the app to start registration.',
        'Create your account and manage appointments simply, anytime.',
      ],
      codeLabel: 'Hover to scan',
      links: [
        {
          label: 'App Store',
          href: 'https://apps.apple.com/us/app/gofitness-app/id6759954935',
        },
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.gofitness.mobile',
        },
      ],
    },
    membershipNote: {
      kicker: 'Membership',
      title: 'Limited Membership',
      intro: 'Memberships designed around your goals, schedule and progress.',
      text:
        'We believe training quality begins with the quality of the environment. That is why the number of members is limited. Membership is available by application.',
    },
    application: {
      kicker: 'APPLICATIONS FOR MEMBERSHIP',
      title: 'Your ÉLAN begins here.',
      text: 'Every membership begins with an introduction.',
      note:
        'Share a few basic details with us, and we will contact you to discuss your goals, introduce the ÉLAN concept and answer any questions about membership.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      focus: 'Choose a training package',
      focusPlaceholder: 'I have not decided yet',
      cta: 'Apply for membership',
      submit: 'Apply for membership',
      success: 'Your application has been sent.',
      successTitle: 'Application received.',
      successText:
        'Thank you for your interest in ÉLAN. We will be in touch shortly with the next steps.',
      successClose: 'Close',
      error: 'Sending is currently unavailable.',
    },
    promoPopup: {
      kicker: 'Welcome to ÉLAN.',
      title: 'YOUR ÉLAN BEGINS HERE.',
      text: [
        'Before becoming a member, we invite you to experience what training feels like in a space where the focus is entirely on you.',
        'A calmer environment. Fewer people. More attention.',
      ],
      highlight: 'Apply for a free introductory session and discover the ÉLAN approach.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      submit: 'Apply',
      success: 'Your application has been sent.',
      successText: 'Thank you. We will be in touch shortly to arrange your first session.',
      error: 'Sending is currently unavailable.',
      close: 'Close popup',
      focus: 'besplatan trening',
    },
    footer: {
      line: ['Women’s Private Gym', 'Focus · Discipline · Strength'],
      addressLabel: 'Location',
      address: ['Ivankovačka 6', 'Beograd'],
      addressHref:
        'https://www.google.com/maps/place/%D0%98%D0%B2%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0%D1%87%D0%BA%D0%B0+6,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4/@44.8073383,20.4762225,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7a9895906a3f:0x1cc70b635f44c727!8m2!3d44.8073345!4d20.4787974!16s%2Fg%2F11kx26vptj?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D',
      phoneLabel: 'Phone',
      phone: '066 066 166',
      phoneHref: 'tel:+38166066166',
      email: 'hello@elanfit.rs',
      emailHref: 'mailto:hello@elanfit.rs',
      socialLabel: 'Social',
    },
  },
};

const normalizePhoneInput = (value) => {
  const cleaned = value.replace(/[^\d+\s()./-]/g, '');
  const withoutExtraPlus = cleaned.replace(/(?!^)\+/g, '');
  return withoutExtraPlus.replace(/\s{2,}/g, ' ').trimStart();
};

const normalizePhoneForSubmit = (value) => value.replace(/[^\d+]/g, '');
const honeypotFieldName = 'elan_contact_reference';

const handlePhoneInputChange = (event) => {
  event.currentTarget.value = normalizePhoneInput(event.currentTarget.value);
};

const preserveScrollPosition = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const restoreScroll = () => window.scrollTo(scrollX, scrollY);

  window.requestAnimationFrame(restoreScroll);
  window.setTimeout(restoreScroll, 0);
  window.setTimeout(restoreScroll, 80);
  window.setTimeout(restoreScroll, 220);
  window.setTimeout(restoreScroll, 420);
  window.setTimeout(restoreScroll, 700);
};

const focusFieldWithoutScroll = (event) => {
  const field = event.target.closest('input, textarea');

  if (!field || field.disabled || field.readOnly) {
    return;
  }

  event.preventDefault();
  field.focus({ preventScroll: true });
  preserveScrollPosition();
};

export default function Home() {
  const [language, setLanguage] = useState('sr');
  const [activeMembership, setActiveMembership] = useState(0);
  const [activeSpaceSlide, setActiveSpaceSlide] = useState(0);
  const [submitState, setSubmitState] = useState('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoDismissed, setPromoDismissed] = useState(false);
  const [promoSubmitState, setPromoSubmitState] = useState('idle');
  const [promoSource, setPromoSource] = useState('elan-free-training-popup');
  const [promoStartedAt, setPromoStartedAt] = useState(() => new Date().toISOString());
  const [formStartedAt] = useState(() => new Date().toISOString());
  const spaceTouchStart = useRef(null);
  const spaceTouchCurrent = useRef(null);
  const promoCloseTimeout = useRef(null);
  const copy = content[language];
  const leadsWebAppUrl = process.env.NEXT_PUBLIC_LEADS_WEB_APP_URL;
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const visualImage = `url('${assetBasePath}/elan-visual-reference.jpg')`;
  const heroImage = `url('${assetBasePath}/images/elan-hero-002.png')`;
  const membershipImage = `url('${assetBasePath}/images/membership_img.png')`;
  const applicationImage = `url('${assetBasePath}/images/application_002.png')`;
  const promoImage = `url('${assetBasePath}/images/training-concept__image_001.png')`;
  const spaceSlides = [
    {
      src: `${assetBasePath}/images/prostor_01.jpeg`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/prostor_02.jpeg`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/prostor_03.jpeg`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/prostor_04.jpeg`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/prostor_05.jpeg`,
      position: 'center',
    },
  ];
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      shiftSpaceSlide(1);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shouldOpenQrPromo =
      params.get('promo') === 'qr' ||
      params.get('popup') === 'qr' ||
      params.get('source') === 'flyer';

    if (!shouldOpenQrPromo) {
      return;
    }

    setPromoSource('elan-flyer-qr-popup');
    setPromoDismissed(false);
    setPromoSubmitState('idle');
    setPromoStartedAt(new Date().toISOString());
    setIsPromoOpen(true);
  }, []);
  useEffect(() => {
    if (promoDismissed || isPromoOpen) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setPromoStartedAt(new Date().toISOString());
      setIsPromoOpen(true);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [promoDismissed, isPromoOpen]);
  useEffect(() => {
    if (!isPromoOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isPromoOpen]);
  useEffect(() => () => {
    if (promoCloseTimeout.current) {
      window.clearTimeout(promoCloseTimeout.current);
    }
  }, []);
  const shiftSpaceSlide = (direction) => {
    setActiveSpaceSlide((current) => {
      const next = current + direction;

      if (next < 0) {
        return spaceSlides.length - 1;
      }

      if (next >= spaceSlides.length) {
        return 0;
      }

      return next;
    });
  };
  const getSpaceSlideOffset = (index) => {
    const rawOffset = index - activeSpaceSlide;

    if (rawOffset === spaceSlides.length - 1) {
      return -1;
    }

    if (rawOffset === -(spaceSlides.length - 1)) {
      return 1;
    }

    return rawOffset;
  };
  const handleSpaceTouchStart = (event) => {
    const touch = event.touches[0];
    spaceTouchStart.current = { x: touch.clientX, y: touch.clientY };
    spaceTouchCurrent.current = { x: touch.clientX, y: touch.clientY };
  };
  const handleSpaceTouchMove = (event) => {
    const touch = event.touches[0];
    spaceTouchCurrent.current = { x: touch.clientX, y: touch.clientY };
  };
  const resetSpaceTouch = () => {
    spaceTouchStart.current = null;
    spaceTouchCurrent.current = null;
  };
  const handleHomeClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSpaceTouchEnd = () => {
    if (!spaceTouchStart.current || !spaceTouchCurrent.current) {
      return;
    }

    const deltaX = spaceTouchCurrent.current.x - spaceTouchStart.current.x;
    const deltaY = spaceTouchCurrent.current.y - spaceTouchStart.current.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25;

    if (isHorizontalSwipe) {
      shiftSpaceSlide(deltaX < 0 ? 1 : -1);
    }

    resetSpaceTouch();
  };
  const closePromoPopup = () => {
    if (promoCloseTimeout.current) {
      window.clearTimeout(promoCloseTimeout.current);
    }

    setIsPromoOpen(false);
    setPromoDismissed(true);
    setPromoSubmitState('idle');
  };
  const handleApplicationSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get(honeypotFieldName);

    if (honeypot) {
      setSubmitState('error');
      return;
    }

    if (!leadsWebAppUrl) {
      setSubmitState('error');
      return;
    }

    const normalizedPhone = normalizePhoneForSubmit(formData.get('phone') || '');

    if (normalizedPhone.length < 6) {
      setSubmitState('error');
      return;
    }

    formData.set('phone', normalizedPhone);
    formData.set('userAgent', navigator.userAgent);
    formData.set('ip', '');
    formData.set('pageUrl', window.location.href);
    formData.set('submittedAt', new Date().toISOString());
    setSubmitState('sending');

    try {
      await fetch(leadsWebAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData),
      });

      form.reset();
      setSubmitState('success');
    } catch {
      form.reset();
      setSubmitState('success');
    }
  };
  const handlePromoSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get(honeypotFieldName);

    if (honeypot) {
      setPromoSubmitState('error');
      return;
    }

    if (!leadsWebAppUrl) {
      setPromoSubmitState('error');
      return;
    }

    const normalizedPhone = normalizePhoneForSubmit(formData.get('phone') || '');

    if (normalizedPhone.length < 6) {
      setPromoSubmitState('error');
      return;
    }

    formData.set('phone', normalizedPhone);
    formData.set('focus', copy.promoPopup.focus);
    formData.set('source', promoSource);
    formData.set('userAgent', navigator.userAgent);
    formData.set('ip', '');
    formData.set('pageUrl', window.location.href);
    formData.set('submittedAt', new Date().toISOString());
    setPromoSubmitState('sending');

    try {
      await fetch(leadsWebAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData),
      });

      form.reset();
      setPromoSubmitState('success');
      promoCloseTimeout.current = window.setTimeout(closePromoPopup, 1800);
    } catch {
      form.reset();
      setPromoSubmitState('success');
      promoCloseTimeout.current = window.setTimeout(closePromoPopup, 1800);
    }
  };
  const handleBookingCodeClick = (event) => {
    event.preventDefault();
  };

  return (
    <main
      style={{
        '--elan-image': visualImage,
        '--hero-image': heroImage,
        '--membership-image': membershipImage,
        '--application-image': applicationImage,
        '--promo-image': promoImage,
        '--header-tagline':
          language === 'sr' ? '"VAŠ ÉLAN POČINJE OVDE."' : '"Members move in silence"',
      }}
    >
      <header className="site-header" aria-label={copy.nav.label}>
        <a
          className="brand-lockup"
          href="#top"
          aria-label="ÉLAN home"
          onClick={handleHomeClick}
        >
          <img
            className="brand-logo"
            src={`${assetBasePath}/images/ELAN_logo_black.png`}
            alt="ÉLAN"
          />
          <span className="brand-descriptor">Women’s Private Gym</span>
        </a>
        <div
          className={`header-actions ${isMenuOpen ? 'is-open' : ''}`}
          id="site-navigation"
        >
          <nav>
            <a href="#club" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.club}
            </a>
            <a href="#training" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.training}
            </a>
            <a href="#app" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.app}
            </a>
            <a href="#membership" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.membership}
            </a>
            <a href="#apply" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.apply}
            </a>
          </nav>
        </div>
        <div className="header-controls">
          <div className="language-switch" aria-label="Language switcher">
            <button
              type="button"
              className={language === 'sr' ? 'is-active' : ''}
              onClick={() => {
                setLanguage('sr');
                setIsMenuOpen(false);
              }}
            >
              SR
            </button>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => {
                setLanguage('en');
                setIsMenuOpen(false);
              }}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.text}</p>
          <div className="hero__actions">
            <a className="button button--dark" href="#apply">
              {copy.hero.primary}
            </a>
            {copy.hero.secondary ? (
              <a className="button button--light" href="#club">
                {copy.hero.secondary}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="statement section-shell" id="club">
        <p className="section-kicker">{copy.statement.kicker}</p>
        <h2>{copy.statement.title}</h2>
        <p>{copy.statement.text}</p>
        <span>{copy.statement.note}</span>
        <p>{copy.statement.support}</p>
      </section>

      <section className="space">
        <div className="space__inner">
          <div className="space__copy">
            <p className="section-kicker space__kicker">{copy.space.kicker}</p>
            <h2 className="space__title">{copy.space.title}</h2>
            <p className="space__text">{copy.space.text}</p>
          </div>
          <div
            className="space__panel"
            aria-label={copy.space.panel}
            onTouchStart={handleSpaceTouchStart}
            onTouchMove={handleSpaceTouchMove}
            onTouchEnd={handleSpaceTouchEnd}
            onTouchCancel={resetSpaceTouch}
          >
            <div className="space-carousel">
              {spaceSlides.map((slide, index) => {
                const isActive = activeSpaceSlide === index;

                return (
                  <div
                    className={`space-carousel__slide ${isActive ? 'is-active' : ''}`}
                    key={`${slide.src}-${index}`}
                    style={{
                      '--slide-image': `url('${slide.src}')`,
                      '--slide-position': slide.position,
                      '--slide-index': index,
                      '--slide-offset': getSpaceSlideOffset(index),
                    }}
                  />
                );
              })}
            </div>
            <span>ÉLAN</span>
            <small>{copy.space.panel}</small>
          </div>
        </div>
      </section>

      {/* <section className="difference section-shell">
        <div className="section-heading section-heading--centered">
          <p className="section-kicker">{copy.difference.kicker}</p>
          <h2>{copy.difference.title}</h2>
        </div>
        <div className="feature-grid">
          {copy.difference.items.map((item) => (
            <article className="feature-card" key={item.title}>
              <p className="feature-card__eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section className="training-concept section-shell" id="training">
        <div className="training-concept__image training-concept__image--desktop" aria-hidden="true" />
        <div className="training-concept__content">
          <p className="section-kicker">{copy.trainingConcept.kicker}</p>
          <h2>{copy.trainingConcept.title}</h2>
          <p>{copy.trainingConcept.text}</p>
          <p>{copy.trainingConcept.note}</p>
          <div className="training-concept__image training-concept__image--mobile" aria-hidden="true" />
          <div className="training-concept__cards">
            {copy.trainingConcept.items.map((item) => (
              <article className="training-concept__card" key={item.kicker}>
                <p>{item.kicker}</p>
                <h4>{item.text}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ease section-shell">
        <div className="ease__image ease__image--left" aria-hidden="true" />
        <div className="ease__content">
          <p className="section-kicker">{copy.ease.kicker}</p>
          <h2>{copy.ease.title}</h2>
          {copy.ease.text ? <p>{copy.ease.text}</p> : null}
          {copy.ease.note ? <span>{copy.ease.note}</span> : null}
          <ul>
            {copy.ease.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {copy.ease.locality ? (
            <ul className="ease__locality">
              {copy.ease.locality.map((item) => (
                <li key={item.text}>
                  <span>{item.eyebrow}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="ease__image ease__image--right" aria-hidden="true" />
      </section>

      <section className="booking-policy section-shell">
        <div className="booking-policy__intro">
          <p className="section-kicker">{copy.bookingPolicy.kicker}</p>
          <h2>{copy.bookingPolicy.title}</h2>
        </div>
        <div className="booking-policy__body">
          {copy.bookingPolicy.items.map((item) => (
            <p className="booking-policy__item" key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="booking-app" id="app">
        <div className="booking-app__inner">
          <div className="booking-app__copy">
            <p className="section-kicker">{copy.bookingApp.kicker}</p>
            <h2>{copy.bookingApp.title}</h2>
            <p>{copy.bookingApp.text}</p>
            <div className="booking-app__steps booking-app__steps--desktop">
              <ol>
                {copy.bookingApp.steps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="booking-app__links booking-app__links--desktop">
              {copy.bookingApp.links.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="booking-app__mobile-flow">
              <ol className="booking-app__mobile-steps">
                <li>
                  <div className="booking-app__mobile-step-body">
                    <p>{copy.bookingApp.steps[0]}</p>
                    <div className="booking-app__links">
                      {copy.bookingApp.links.map((item) => (
                        <a
                          href={item.href}
                          key={item.label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="booking-app__mobile-step-body">
                    <p>{copy.bookingApp.steps[1]}</p>
                    <a
                      className="booking-app__code booking-app__code--mobile"
                      href="#"
                      onClick={handleBookingCodeClick}
                      aria-label={copy.bookingApp.codeLabel}
                    >
                      <img src={`${assetBasePath}/images/app_img_01.png`} alt="" />
                      <span>
                        <img src={`${assetBasePath}/images/ELAN_QR_Code.png`} alt="" />
                      </span>
                      <small>{copy.bookingApp.codeLabel}</small>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="booking-app__mobile-step-body">
                    <p>{copy.bookingApp.steps[2]}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <a
            className="booking-app__code booking-app__code--desktop"
            href="#"
            onClick={handleBookingCodeClick}
            aria-label={copy.bookingApp.codeLabel}
          >
            <img src={`${assetBasePath}/images/app_img_01.png`} alt="" />
            <span>
              <img src={`${assetBasePath}/images/ELAN_QR_Code.png`} alt="" />
            </span>
            <small>{copy.bookingApp.codeLabel}</small>
          </a>
        </div>
      </section>

      <section className="early-access" id="early-access">
        <div className="early-access__inner">
          <div className="early-access__intro">
            <p className="section-kicker">{copy.earlyAccess.kicker}</p>
            <h2>{copy.earlyAccess.title}</h2>
          </div>
          <div className="early-access__body">
            <p>{copy.earlyAccess.intro}</p>
            {copy.earlyAccess.text ? <p>{copy.earlyAccess.text}</p> : null}
            {copy.earlyAccess.note ? <p>{copy.earlyAccess.note}</p> : null}
            {copy.earlyAccess.benefits.length ? (
              <ul className="early-access__benefits">
                {copy.earlyAccess.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <a className="early-access__cue" href="#membership" aria-label={copy.membership.title}>
            <span />
            <span />
            <span />
          </a>
        </div>
      </section>

      <section className="membership section-shell" id="membership">
        <div className="membership__body">
          <div className="membership-packages">
            <p className="section-kicker">{copy.membership.packagesLabel}</p>
            <div className="membership-list">
              {copy.membership.items.map((item, index) => {
                const isOpen = activeMembership === index;
                const panelId = `membership-panel-${index}`;

                return (
                  <article className="membership-row" key={item.name}>
                    <button
                      type="button"
                      className="membership-row__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setActiveMembership(isOpen ? null : index)}
                    >
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.detail}</p>
                      </div>
                      <span className="membership-row__meta">
                        <span className="membership-row__prices">
                          <strong>{item.price}</strong>
                        </span>
                        <span className="membership-row__arrow" aria-hidden="true" />
                      </span>
                    </button>
                    <div
                      className="membership-row__content"
                      id={panelId}
                      hidden={!isOpen}
                    >
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
              <p className="membership-packages__note">{copy.membership.packagesNote}</p>
            </div>
          </div>
          <div className="membership__media">
            <div className="membership__image" aria-hidden="true" />
            <div className="membership__media-content">
              <p className="section-kicker">{copy.membership.imagePromo.kicker}</p>
              <h3>{copy.membership.imagePromo.title}</h3>
              <div className="membership__media-text">
                {copy.membership.imagePromo.text.map((item) => {
                  const highlight = copy.membership.imagePromo.highlight;

                  if (highlight && item.startsWith(highlight)) {
                    return (
                      <p key={item}>
                        <strong>{highlight}</strong>
                        {item.slice(highlight.length)}
                      </p>
                    );
                  }

                  return <p key={item}>{item}</p>;
                })}
              </div>
              {copy.membership.imagePromo.benefits.length ? (
                <ul>
                  {copy.membership.imagePromo.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <a className="button button--dark" href="#apply">
                {copy.membership.imagePromo.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="audience section-shell">
        <div className="section-heading">
          <p className="section-kicker">{copy.audience.kicker}</p>
          <h2>{copy.audience.title}</h2>
          <p>{copy.audience.text}</p>
        </div>
        <ul>
          {copy.audience.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section> */}

      <section className="application" id="apply">
        <div className="application__copy">
          <p className="section-kicker">{copy.application.kicker}</p>
          <h2>{copy.application.title}</h2>
          <p>
            <strong>{copy.application.text}</strong>
          </p>
          {copy.application.note ? <p>{copy.application.note}</p> : null}
        </div>
        <form
          className="application-form"
          onSubmit={handleApplicationSubmit}
        >
          <label className="form-field--hidden" aria-hidden="true">
            Reference
            <input
              type="text"
              name={honeypotFieldName}
              tabIndex="-1"
              autoComplete="new-password"
            />
          </label>
          <input type="hidden" name="formStartedAt" value={formStartedAt} />
          <input type="hidden" name="source" value="elan-membership-application" />
          <input type="hidden" name="language" value={language} />
          <input type="hidden" name="ip" value="" />
          <input type="hidden" name="userAgent" value="" />
          <input type="hidden" name="pageUrl" value="" />
          <input type="hidden" name="submittedAt" value="" />
          <label>
            {copy.application.name}
            <input
              type="text"
              name="name"
              autoComplete="name"
              minLength="2"
              maxLength="80"
              required
            />
          </label>
          <label>
            {copy.application.email}
            <input
              type="email"
              name="email"
              autoComplete="email"
              maxLength="120"
              required
            />
          </label>
          <label>
            {copy.application.phone}
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              pattern="[\d+\s()./-]{6,32}"
              onChange={handlePhoneInputChange}
              minLength="6"
              maxLength="32"
              required
            />
          </label>
          <label>
            {copy.application.focus}
            <select name="focus" defaultValue={copy.application.focusPlaceholder} required>
              <option value={copy.application.focusPlaceholder}>
                {copy.application.focusPlaceholder}
              </option>
              {copy.membership.items.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} - {item.detail}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" disabled={submitState === 'sending'}>
            {copy.application.submit}
          </button>
          <p className="form-status" role="status">
            {submitState === 'error' && copy.application.error}
          </p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <img
            className="brand-logo"
            src={`${assetBasePath}/images/ELAN_logo_black.png`}
            alt="ÉLAN"
          />
          <p>
            {copy.footer.line.map((item, index) => (
              <span className={index === 0 ? 'site-footer__descriptor' : undefined} key={item}>
                {item}
              </span>
            ))}
          </p>
        </div>
        <div className="site-footer__details">
          <div>
            <p className="site-footer__label">{copy.footer.addressLabel}</p>
            <a href={copy.footer.addressHref} target="_blank" rel="noopener noreferrer">
              {copy.footer.address.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </a>
          </div>
          <div>
            <p className="site-footer__label">{copy.footer.phoneLabel}</p>
            <p>
              <a href={copy.footer.phoneHref}>{copy.footer.phone}</a>
            </p>
            <p>
              <a href={copy.footer.emailHref}>{copy.footer.email}</a>
            </p>
          </div>
          <div>
            <p className="site-footer__label">{copy.footer.socialLabel}</p>
            <div className="site-footer__socials">
              <a href="#" aria-label="ÉLAN Facebook">
                FB
              </a>
              <a
                href="https://www.instagram.com/elan_gym"
                aria-label="ÉLAN Instagram"
                target="_blank"
                rel="noreferrer"
              >
                IG
              </a>
            </div>
          </div>
        </div>
      </footer>

      {isPromoOpen && (
        <div
          className="promo-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-modal-title"
        >
          <button
            type="button"
            className="promo-modal__backdrop"
            onClick={closePromoPopup}
            aria-label={copy.promoPopup.close}
          />
          <div className="promo-modal__panel">
            <button
              type="button"
              className="promo-modal__close"
              onClick={closePromoPopup}
              aria-label={copy.promoPopup.close}
            >
              <span />
              <span />
            </button>
            <div className="promo-modal__content">
              <p className="section-kicker">{copy.promoPopup.kicker}</p>
              <h2 id="promo-modal-title">{copy.promoPopup.title}</h2>
              {copy.promoPopup.text.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <p className="promo-modal__highlight">{copy.promoPopup.highlight}</p>
              {promoSubmitState === 'success' ? (
                <div className="promo-modal__success" role="status">
                  <p className="section-kicker">{copy.promoPopup.success}</p>
                  <p>{copy.promoPopup.successText}</p>
                </div>
              ) : (
                <form
                  className="promo-form"
                  onSubmit={handlePromoSubmit}
                  onFocusCapture={preserveScrollPosition}
                  onPointerDownCapture={focusFieldWithoutScroll}
                >
                  <label className="form-field--hidden" aria-hidden="true">
                    Reference
                    <input
                      type="text"
                      name={honeypotFieldName}
                      tabIndex="-1"
                      autoComplete="new-password"
                    />
                  </label>
                  <input type="hidden" name="formStartedAt" value={promoStartedAt} />
                  <input type="hidden" name="source" value={promoSource} />
                  <input type="hidden" name="focus" value={copy.promoPopup.focus} />
                  <input type="hidden" name="language" value={language} />
                  <input type="hidden" name="ip" value="" />
                  <input type="hidden" name="userAgent" value="" />
                  <input type="hidden" name="pageUrl" value="" />
                  <input type="hidden" name="submittedAt" value="" />
                  <label>
                    {copy.promoPopup.name}
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      minLength="2"
                      maxLength="80"
                      required
                    />
                  </label>
                  <label>
                    {copy.promoPopup.email}
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      maxLength="120"
                      required
                    />
                  </label>
                  <label>
                    {copy.promoPopup.phone}
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[\d+\s()./-]{6,32}"
                      onChange={handlePhoneInputChange}
                      minLength="6"
                      maxLength="32"
                      required
                    />
                  </label>
                  <button type="submit" disabled={promoSubmitState === 'sending'}>
                    {copy.promoPopup.submit}
                  </button>
                  <p className="promo-form__status" role="status">
                    {promoSubmitState === 'error' && copy.promoPopup.error}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {submitState === 'success' && (
        <div
          className="success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div
            className="success-modal__backdrop"
            onClick={() => setSubmitState('idle')}
            aria-hidden="true"
          />
          <div className="success-modal__panel">
            <p className="section-kicker">{copy.application.success}</p>
            <h2 id="success-modal-title">{copy.application.successTitle}</h2>
            <p>{copy.application.successText}</p>
            <button type="button" onClick={() => setSubmitState('idle')}>
              {copy.application.successClose}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
