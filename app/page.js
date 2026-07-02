'use client';

import { useEffect, useRef, useState } from 'react';

const content = {
  sr: {
    nav: {
      club: 'Klub',
      training: 'Trening',
      membership: 'Članstvo',
      apply: 'Prijava',
      label: 'Glavna navigacija',
    },
    hero: {
      eyebrow: 'VIŠE OD TRENINGA',
      title: 'Snaga, gracioznost, disciplina.',
      text: 'ÉLAN je privatni prostor za trening namenjen ženama koje žele da grade snagu u mirnom, fokusiranom i prefinjenom okruženju.',
      primary: 'Saznaj više',
      secondary: null,
    },
    statement: {
      kicker: 'ÉLAN',
      title: 'Drugačiji pristup treningu.',
      text: 'ÉLAN je zajednica žena koje ulažu u svoje zdravlje, snagu i kvalitet života. Prostor u kome su privatnost, kvalitet treninga i atmosfera podjednako važni kao i rezultati.',
      support:
        'Samo pažljivo vođeni treninzi, stručna podrška i okruženje koje omogućava da se fokusirate na sebe i svoje ciljeve.',
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
      title: 'Individualan pristup. Vođeni treninzi.',
      text: 'Svako članstvo počinje konsultacijama kroz koje razumemo vaše ciljeve, iskustvo i način života. Na osnovu toga ÉLAN pristup ostaje ličan, strukturisan i usmeren na dugoročni napredak.',
      note: 'Na taj način obezbeđujemo sigurnost, kontinuitet i napredak u skladu sa mogućnostima i ciljevima svake članice.',
      items: [
        {
          kicker: 'INDIVIDUALNI PRISTUP',
          title: 'Kreiran prema vašim ciljevima.',
          text: 'Bez obzira da li vam je cilj povećanje snage, oblikovanje tela, gubitak telesne mase ili unapređenje kondicije, pristup ostaje individualan.',
        },
        {
          kicker: 'VOĐENI TRENINZI',
          title: 'Svaki trening ima svrhu.',
          text: 'Svi treninzi odvijaju se u okviru vođenih termina uz prisustvo trenera, sa jasnom strukturom, stručnim nadzorom i fokusom na kvalitetan rad.',
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
      items: [
        {
          name: 'FOCUS',
          detail: '8 treninga mesečno',
          originalPrice: '24.000 RSD',
          price: '20.000 RSD',
          description:
            'Za one koje žele kontinuitet i ravnotežu između treninga i svakodnevnih obaveza.',
        },
        {
          name: 'DISCIPLINE',
          detail: '10 treninga mesečno',
          originalPrice: '26.000 RSD',
          price: '22.000 RSD',
          description:
            'Za one koje veruju da rezultati dolaze kroz doslednost i posvećen rad.',
        },
        {
          name: 'STRENGTH',
          detail: '12 treninga mesečno',
          originalPrice: '28.000 RSD',
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
      intro: 'Članstvo kreirano prema vašim ciljevima, tempu i napretku.',
      text:
        'Verujemo da kvalitet treninga počinje kvalitetom okruženja i zbog toga je broj članova ograničen. Članstvo je dostupno putem prijave.',
      note: null,
      benefits: [],
      cta: 'Prijavi se za članstvo',
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
        'Svi paketi važe na mesečnom nivou.',
        'Prilikom učlanjenja rezervišu se željeni termini treninga.',
        'U slučaju sprečenosti, termin je moguće blagovremeno otkazati putem aplikacije.',
        'Blagovremeno otkazani termini neće biti obračunati i mogu se nadoknaditi u prvom dostupnom terminu kod izabranog trenera.',
        'Na taj način obezbeđujemo fleksibilnost za članice, uz očuvanje kvaliteta rada i organizacije treninga.',
      ],
    },
    bookingApp: {
      kicker: 'ÉLAN APP',
      title: 'Zakazivanje uvek pri ruci.',
      text: 'Raspored treninga ostaje pregledan i jednostavan, uz diskretan pristup terminima i promenama kada je to potrebno.',
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
      kicker: 'Prijave za članstvo',
      title: 'Budite među prvima.',
      text: 'Broj članica je ograničen. Prijavite se na listu zainteresovanih i budite među prvima koje će dobiti informacije o pristupu.',
      name: 'Ime',
      email: 'Email',
      phone: 'Telefon',
      focus: 'Trening fokus',
      focusPlaceholder: 'Nisam još odlučila',
      cta: 'Prijavi se za članstvo',
      submit: 'Prijavi se za članstvo',
      success: 'Prijava je poslata.',
      successTitle: 'Prijava je primljena.',
      successText:
        'Hvala na interesovanju za ÉLAN. Javićemo se uskoro sa sledećim koracima.',
      successClose: 'Zatvori',
      error: 'Slanje trenutno nije uspelo.',
      blocked: 'Slanje nije prihvaćeno.',
    },
    footer: {
      line: ['Women’s Private Gym', 'Focus · Discipline · Strength'],
      addressLabel: 'Lokacija',
      address: ['Ivankovačka 6', 'Beograd'],
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
        'Only carefully guided training, professional support and an environment that allows you to focus on yourself and your goals.',
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
      title: 'Individual approach. Guided training.',
      text: 'Every member begins with an initial consultation where we define goals, experience and individual needs. From there, a training plan is created around your pace, abilities and desired results.',
      note: 'This keeps training safe, consistent and aligned with each member’s possibilities and goals.',
      items: [
        {
          kicker: 'INDIVIDUAL APPROACH',
          title: 'Designed around you.',
          text: 'Whether your focus is strength, body composition, weight loss or conditioning, the approach remains personal and adapted to your progress.',
        },
        {
          kicker: 'GUIDED TRAINING',
          title: 'Every session matters.',
          text: 'All sessions take place in guided appointments with a trainer present, clear structure and professional supervision throughout the work.',
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
      items: [
        {
          name: 'FOCUS',
          detail: '8 sessions per month',
          originalPrice: '24,000 RSD',
          price: '20,000 RSD',
          description:
            'For those who want continuity and balance between training and everyday responsibilities.',
        },
        {
          name: 'DISCIPLINE',
          detail: '10 sessions per month',
          originalPrice: '26,000 RSD',
          price: '22,000 RSD',
          description:
            'For those who believe results come through consistency and dedicated work.',
        },
        {
          name: 'STRENGTH',
          detail: '12 sessions per month',
          originalPrice: '28,000 RSD',
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
      intro: 'Memberships designed around your goals, schedule and progress.',
      text:
        'We believe training quality begins with the quality of the environment. That is why the number of members is limited. Membership is available by application.',
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
        'All packages are valid on a monthly basis.',
        'Preferred training appointments are reserved upon joining.',
        'If you are unable to attend, the appointment can be cancelled in time through the app.',
        'Appointments cancelled in time will not be charged and can be made up in the first available appointment with the selected trainer.',
        'This gives members flexibility while preserving the quality of work and training organisation.',
      ],
    },
    bookingApp: {
      kicker: 'ÉLAN APP',
      title: 'Scheduling, always within reach.',
      text: 'Your training schedule stays clear and simple, with discreet access to appointments and changes when needed.',
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
      kicker: 'Join the Waiting List',
      title: 'Be among the first.',
      text: 'The number of members is limited. Join the waiting list and be among the first to receive information about opening and enrolment.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      focus: 'Training focus',
      focusPlaceholder: 'I have not decided yet',
      cta: 'Apply',
      submit: 'Join the Waiting List',
      success: 'Your application has been sent.',
      successTitle: 'Application received.',
      successText:
        'Thank you for your interest in ÉLAN. We will be in touch shortly with the next steps.',
      successClose: 'Close',
      error: 'Sending is currently unavailable.',
      blocked: 'This submission was not accepted.',
    },
    footer: {
      line: ['Women’s Private Gym', 'Focus · Discipline · Strength'],
      addressLabel: 'Location',
      address: ['Ivankovačka 6', 'Beograd'],
      phoneLabel: 'Phone',
      phone: '066 066 166',
      phoneHref: 'tel:+38166066166',
      email: 'hello@elanfit.rs',
      emailHref: 'mailto:hello@elanfit.rs',
      socialLabel: 'Social',
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState('sr');
  const [activeMembership, setActiveMembership] = useState(0);
  const [activeSpaceSlide, setActiveSpaceSlide] = useState(0);
  const [submitState, setSubmitState] = useState('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStartedAt] = useState(() => new Date().toISOString());
  const spaceTouchStart = useRef(null);
  const spaceTouchCurrent = useRef(null);
  const copy = content[language];
  const leadsWebAppUrl = process.env.NEXT_PUBLIC_LEADS_WEB_APP_URL;
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const visualImage = `url('${assetBasePath}/elan-visual-reference.jpg')`;
  const heroImage = `url('${assetBasePath}/images/elan-hero-002.png')`;
  const membershipImage = `url('${assetBasePath}/images/membership_img.png')`;
  const applicationImage = `url('${assetBasePath}/images/elan-prostor-6.png')`;
  const spaceSlides = [
    {
      src: `${assetBasePath}/images/elan-prostor-7.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-1.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-2.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-3.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-4.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-5.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-6.png`,
      position: 'center',
    },
  ];
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      shiftSpaceSlide(1);
    }, 6000);

    return () => window.clearInterval(intervalId);
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
  const handleApplicationSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get('website');
    const startedAt = Date.parse(formData.get('formStartedAt'));
    const elapsedMs = Date.now() - startedAt;

    if (honeypot || Number.isNaN(startedAt) || elapsedMs < 2500) {
      setSubmitState('blocked');
      return;
    }

    if (!leadsWebAppUrl) {
      setSubmitState('error');
      return;
    }

    formData.set('userAgent', navigator.userAgent);
    formData.set('ip', '');
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

  return (
    <main
      style={{
        '--elan-image': visualImage,
        '--hero-image': heroImage,
        '--membership-image': membershipImage,
        '--application-image': applicationImage,
      }}
    >
      <header className="site-header" aria-label={copy.nav.label}>
        <a
          className="brand-lockup"
          href="#top"
          aria-label="ÉLAN home"
          onClick={handleHomeClick}
        >
          <span className="brand-mark">ÉLAN</span>
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

      <section className="training-concept section-shell" id="training">
        <div className="training-concept__image" aria-hidden="true" />
        <div className="training-concept__content">
          <p className="section-kicker">{copy.trainingConcept.kicker}</p>
          <h2>{copy.trainingConcept.title}</h2>
          <p>{copy.trainingConcept.text}</p>
          <p>{copy.trainingConcept.note}</p>
          <div className="training-concept__cards">
            {copy.trainingConcept.items.map((item) => (
              <article className="training-concept__card" key={item.title}>
                <p>{item.kicker}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
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
            <p>{copy.earlyAccess.text}</p>
            {copy.earlyAccess.note ? <p>{copy.earlyAccess.note}</p> : null}
            {copy.earlyAccess.benefits.length ? (
              <ul className="early-access__benefits">
                {copy.earlyAccess.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <a className="button button--dark" href="#apply">
              {copy.earlyAccess.cta}
            </a>
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
                          {item.originalPrice ? (
                            <span className="membership-row__price-old">{item.originalPrice}</span>
                          ) : null}
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
            </div>
          </div>
          <div className="membership__media">
            <div className="membership__image" aria-hidden="true" />
          </div>
        </div>
        <div className="membership__intro">
          <p className="section-kicker">{copy.membership.kicker}</p>
          <h2>{copy.membership.title}</h2>
          <div className="membership__copy">
            {copy.membership.note ? <p>{copy.membership.note}</p> : null}
            {copy.membership.detail ? <p>{copy.membership.detail}</p> : null}
            {copy.membership.highlights ? <p>{copy.membership.highlights}</p> : null}
            <a className="button button--dark" href="#apply">
              {copy.application.cta}
            </a>
          </div>
        </div>
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

      <section className="booking-app">
        <div className="booking-app__inner">
          <div className="booking-app__copy">
            <p className="section-kicker">{copy.bookingApp.kicker}</p>
            <h2>{copy.bookingApp.title}</h2>
            <p>{copy.bookingApp.text}</p>
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
          <a className="booking-app__code" href="#" aria-label={copy.bookingApp.codeLabel}>
            <img src={`${assetBasePath}/images/app_img_01.png`} alt="" />
            <span>
              <img src={`${assetBasePath}/images/ELAN_QR_Code.png`} alt="" />
            </span>
            <small>{copy.bookingApp.codeLabel}</small>
          </a>
        </div>
      </section>

      <section className="membership-note section-shell">
        <p className="section-kicker">{copy.membershipNote.kicker}</p>
        <h2>{copy.membershipNote.title}</h2>
        <p>{copy.membershipNote.intro}</p>
        <p>{copy.membershipNote.text}</p>
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
          <p>{copy.application.text}</p>
        </div>
        <form className="application-form" onSubmit={handleApplicationSubmit}>
          <label className="form-field--hidden" aria-hidden="true">
            Website
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
            />
          </label>
          <input type="hidden" name="formStartedAt" value={formStartedAt} />
          <input type="hidden" name="source" value="elan-membership-application" />
          <input type="hidden" name="language" value={language} />
          <input type="hidden" name="ip" value="" />
          <input type="hidden" name="userAgent" value="" />
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
            {submitState === 'blocked' && copy.application.blocked}
          </p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <span className="brand-mark">ÉLAN</span>
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
            {copy.footer.address.map((item) => (
              <p key={item}>{item}</p>
            ))}
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
