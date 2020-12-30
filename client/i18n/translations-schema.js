/* eslint-disable camelcase */
/* This is used for testing. If a translations.json file doesn't match the
 * structure here exactly, the tests will fail.
 */
const {
  arrayOfItems,
  strictObject,
  stringType
} = require('jest-json-schema-extended');

const translationsSchema = strictObject({
  meta: strictObject({
    title: stringType,
    description: stringType,
    keywords: arrayOfItems(stringType, { minItems: 1 }),
    'youre-unsubscribed': stringType
  }),
  buttons: strictObject({
    'logged-in-cta-btn': stringType,
    'logged-out-cta-btn': stringType,
    'view-curriculum': stringType,
    'first-lesson': stringType,
    close: stringType,
    edit: stringType,
    'show-code': stringType,
    'show-solution': stringType,
    frontend: stringType,
    backend: stringType,
    view: stringType,
    'show-cert': stringType,
    'claim-cert': stringType,
    'save-progress': stringType,
    'accepted-honesty': stringType,
    agree: stringType,
    'save-portfolio': stringType,
    'remove-portfolio': stringType,
    'add-portfolio': stringType,
    'download-data': stringType,
    public: stringType,
    private: stringType,
    off: stringType,
    on: stringType,
    'sign-in': stringType,
    'sign-out': stringType,
    curriculum: stringType,
    forum: stringType,
    profile: stringType,
    'update-settings': stringType,
    'sign-me-out': stringType,
    'flag-user': stringType,
    'current-challenge': stringType,
    'try-again': stringType,
    menu: stringType,
    settings: stringType,
    'take-me': stringType,
    'check-answer': stringType,
    'get-hint': stringType,
    'ask-for-help': stringType,
    'create-post': stringType,
    cancel: stringType,
    'reset-lesson': stringType,
    run: stringType,
    'run-test': stringType,
    reset: stringType,
    'reset-code': stringType,
    help: stringType,
    'get-help': stringType,
    'watch-video': stringType,
    resubscribe: stringType,
    'click-here': stringType,
    save: stringType,
    'no-thanks': stringType,
    'yes-please': stringType,
    'update-email': stringType,
    'verify-email': stringType,
    'submit-and-go': stringType,
    'go-to-next': stringType,
    'ask-later': stringType
  }),
  landing: strictObject({
    'big-heading-1': stringType,
    'big-heading-2': stringType,
    'big-heading-3': stringType,
    'h2-heading': stringType,
    'hero-img-description': stringType,
    'as-seen-in': stringType,
    testimonials: strictObject({
      heading: stringType,
      shawn: strictObject({
        location: stringType,
        occupation: stringType,
        testimony: stringType
      }),
      sarah: strictObject({
        location: stringType,
        occupation: stringType,
        testimony: stringType
      }),
      emma: strictObject({
        location: stringType,
        occupation: stringType,
        testimony: stringType
      })
    }),
    'certification-heading': stringType
  }),
  settings: strictObject({
    'share-projects': stringType,
    privacy: stringType,
    data: stringType,
    disabled: stringType,
    'claim-legacy': stringType,
    for: stringType,
    username: strictObject({
      'contains invalid characters': stringType,
      'is too short': stringType,
      'is a reserved error code': stringType,
      unavailable: stringType,
      validating: stringType,
      available: stringType,
      change: stringType
    }),
    labels: strictObject({
      username: stringType,
      name: stringType,
      location: stringType,
      picture: stringType,
      about: stringType,
      personal: stringType,
      title: stringType,
      url: stringType,
      image: stringType,
      description: stringType,
      'project-name': stringType,
      solution: stringType,
      'solution-for': stringType,
      'my-profile': stringType,
      'my-name': stringType,
      'my-location': stringType,
      'my-about': stringType,
      'my-points': stringType,
      'my-heatmap': stringType,
      'my-certs': stringType,
      'my-portfolio': stringType,
      'my-timeline': stringType,
      'my-donations': stringType,
      'night-mode': stringType
    }),
    headings: strictObject({
      certs: stringType,
      'legacy-certs': stringType,
      honesty: stringType,
      internet: stringType,
      portfolio: stringType,
      privacy: stringType
    }),
    danger: strictObject({
      heading: stringType,
      'be-careful': stringType,
      reset: stringType,
      delete: stringType,
      'delete-title': stringType,
      'delete-p1': stringType,
      'delete-p2': stringType,
      'delete-p3': stringType,
      nevermind: stringType,
      certain: stringType,
      'reset-heading': stringType,
      'reset-p1': stringType,
      'reset-p2': stringType,
      'nevermind-2': stringType,
      'reset-confirm': stringType
    }),
    email: strictObject({
      missing: stringType,
      heading: stringType,
      'not-verified': stringType,
      check: stringType,
      current: stringType,
      new: stringType,
      confirm: stringType,
      weekly: stringType
    }),
    honesty: strictObject({
      p1: stringType,
      p2: stringType,
      p3: stringType,
      p4: stringType,
      p5: stringType,
      p6: stringType,
      p7: stringType
    })
  }),
  profile: strictObject({
    'you-not-public': stringType,
    'username-not-public': stringType,
    'you-change-privacy': stringType,
    'username-change-privacy': stringType,
    supporter: stringType,
    contributor: stringType,
    'no-certs': stringType,
    'fcc-certs': stringType,
    'longest-streak': stringType,
    'current-streak': stringType,
    portfolio: stringType,
    timeline: stringType,
    'none-completed': stringType,
    'get-started': stringType,
    challenge: stringType,
    completed: stringType,
    'add-linkedin': stringType,
    'add-twitter': stringType,
    tweet: stringType,
    avatar: stringType,
    joined: stringType,
    'total-points': stringType,
    'total-points_plural': stringType,
    points: stringType,
    points_plural: stringType,
    'screen-shot': stringType,
    'page-number': stringType
  }),
  footer: strictObject({
    'tax-exempt-status': stringType,
    'mission-statement': stringType,
    'donation-initiatives': stringType,
    'donate-text': stringType,
    'donate-link': stringType,
    'trending-guides': stringType,
    'our-nonprofit': stringType,
    links: strictObject({
      about: stringType,
      'about-url': stringType,
      alumni: stringType,
      'open-source': stringType,
      shop: stringType,
      'shop-url': stringType,
      support: stringType,
      'support-url': stringType,
      sponsors: stringType,
      'sponsors-url': stringType,
      honesty: stringType,
      'honesty-url': stringType,
      coc: stringType,
      'coc-url': stringType,
      privacy: stringType,
      'privacy-url': stringType,
      tos: stringType,
      'tos-url': stringType,
      copyright: stringType,
      'copyright-url': stringType
    }),
    language: stringType
  }),
  learn: strictObject({
    heading: stringType,
    'welcome-1': stringType,
    'welcome-2': stringType,
    'start-at-beginning': stringType,
    'read-this': strictObject({
      heading: stringType,
      p1: stringType,
      p2: stringType,
      p3: stringType,
      p4: stringType,
      p5: stringType,
      p6: stringType,
      p7: stringType,
      p8: stringType,
      p9: stringType,
      p10: stringType,
      p11: stringType,
      p12: stringType
    }),
    'upcoming-lessons': stringType,
    learn: stringType,
    'add-subtitles': stringType,
    'wrong-answer': stringType,
    'check-answer': stringType,
    'solution-link': stringType,
    'github-link': stringType,
    'submit-and-go': stringType,
    'i-completed': stringType,
    'test-output': stringType,
    'running-tests': stringType,
    'tests-completed': stringType,
    'console-output': stringType,
    'sign-in-save': stringType,
    'download-solution': stringType,
    'percent-complete': stringType,
    'tried-rsa': stringType,
    rsa: stringType,
    reset: stringType,
    'reset-warn': stringType,
    'reset-warn-2': stringType,
    'scrimba-tip': stringType,
    'chal-preview': stringType
  }),
  donate: strictObject({
    title: stringType,
    processing: stringType,
    'thank-you': stringType,
    'thank-you-2': stringType,
    additional: stringType,
    'help-more': stringType,
    error: stringType,
    'free-tech': stringType,
    'gift-frequency': stringType,
    'gift-amount': stringType,
    confirm: stringType,
    'confirm-2': stringType,
    'confirm-3': stringType,
    'confirm-4': stringType,
    'your-donation': stringType,
    'your-donation-2': stringType,
    'your-donation-3': stringType,
    duration: stringType,
    'duration-2': stringType,
    'duration-3': stringType,
    'duration-4': stringType,
    'nicely-done': stringType,
    'credit-card': stringType,
    'credit-card-2': stringType,
    paypal: stringType,
    'need-email': stringType,
    'went-wrong': stringType,
    'valid-info': stringType,
    'valid-email': stringType,
    'valid-card': stringType,
    'email-receipt': stringType,
    'need-help': stringType,
    'forward-receipt': stringType,
    efficiency: stringType,
    'why-donate-1': stringType,
    'why-donate-2': stringType,
    'bigger-donation': stringType,
    'other-ways': stringType,
    'other-ways-url': stringType,
    'failed-pay': stringType,
    'try-again': stringType,
    'card-number': stringType,
    expiration: stringType,
    'only-you': stringType
  }),
  report: strictObject({
    'sign-in': stringType,
    details: stringType,
    portfolio: stringType,
    'portfolio-2': stringType,
    'notify-1': stringType,
    'notify-2': stringType,
    what: stringType,
    submit: stringType
  }),
  '404': strictObject({
    'page-not-found': stringType,
    'not-found': stringType,
    'heres-a-quote': stringType
  }),
  search: strictObject({
    label: stringType,
    placeholder: stringType,
    'see-results': stringType,
    'no-tutorials': stringType,
    try: stringType,
    'no-results': stringType
  }),
  misc: strictObject({
    offline: stringType,
    unsubscribed: stringType,
    'keep-coding': stringType,
    'email-signup': stringType,
    quincy: stringType,
    'email-blast': stringType,
    'update-email-1': stringType,
    'update-email-2': stringType,
    email: stringType,
    and: stringType
  }),
  icons: strictObject({
    'gold-cup': stringType,
    avatar: stringType,
    'avatar-2': stringType,
    donate: stringType,
    fail: stringType,
    'not-passed': stringType,
    passed: stringType,
    heart: stringType,
    initial: stringType,
    info: stringType,
    spacer: stringType,
    toggle: stringType
  }),
  aria: strictObject({
    'fcc-logo': stringType,
    answer: stringType,
    linkedin: stringType,
    github: stringType,
    website: stringType,
    twitter: stringType,
    'first-page': stringType,
    'previous-page': stringType,
    'next-page': stringType,
    'last-page': stringType
  }),
  flash: strictObject({
    'msg-1': stringType,
    'msg-2': stringType,
    'msg-3': stringType,
    'msg-4': stringType,
    'msg-5': stringType,
    'msg-6': stringType,
    'msg-7': stringType,
    'msg-8': stringType,
    'msg-9': stringType,
    'msg-10': stringType,
    'msg-11': stringType,
    'msg-12': stringType,
    'msg-13': stringType,
    'msg-14': stringType,
    'msg-15': stringType,
    'msg-16': stringType,
    'msg-17': stringType,
    'msg-18': stringType,
    'msg-19': stringType,
    'msg-20': stringType,
    'msg-21': stringType,
    'msg-22': stringType,
    'msg-23': stringType,
    'msg-24': stringType,
    'msg-25': stringType,
    'msg-26': stringType,
    'msg-27': stringType,
    'msg-28': stringType,
    'msg-29': stringType,
    'msg-30': stringType,
    'msg-31': stringType,
    'msg-32': stringType,
    'msg-33': stringType,
    'msg-34': stringType,
    'msg-35': stringType,
    'msg-36': stringType,
    'msg-37': stringType,
    'msg-38': stringType,
    'msg-39': stringType,
    'msg-40': stringType,
    'msg-41': stringType,
    'msg-42': stringType,
    'msg-43': stringType,
    'msg-44': stringType,
    'msg-45': stringType
  }),
  validation: strictObject({
    'msg-1': stringType,
    'msg-2': stringType,
    'msg-3': stringType,
    'msg-4': stringType,
    'msg-5': stringType,
    'msg-6': stringType,
    'msg-7': stringType,
    'msg-8': stringType,
    'msg-9': stringType,
    'msg-10': stringType,
    'msg-11': stringType
  })
});

exports.translationsSchema = translationsSchema;
