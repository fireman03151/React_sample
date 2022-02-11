# Wie man Übersetzungen lokal testet

> [!NOTE] Dieser Vorgang ist nicht erforderlich, wird aber dokumentiert, falls du eine Vorschau darauf haben möchtest, wie deine Übersetzungen aussehen werden.

Wenn du deine Übersetzungen auf einer lokalen Instanz der freeCodeCamp `/learn`-Seite testen möchtest, stelle zuerst sicher, dass du die [Codebasis](how-to-setup-freecodecamp-locally.md) eingerichtet hast.

## Eine Sprache aktivieren

Es gibt ein paar Schritte, die du unternehmen musst, damit die Codebasis in deiner gewünschten Sprache erstellt werden kann.

Gehe zuerst in die Datei `config/i18n/all-langs.ts`, um die Sprache zur Liste der verfügbaren Sprachen hinzuzufügen und die Werte zu konfigurieren. Hier gibt es vier Objekte.

- `availableLangs`: Füge sowohl für den `client` als auch für das Studienplan(`curriculum`)-Array den Textnamen der Sprache hinzu. Dies ist der Wert, der später in der `.env`-Datei verwendet wird.
- `auditedCerts`: Füge den Textnamen der Sprache als _Schlüssel_ und ein Array von `SuperBlocks.{cert}`-Variablen als _Wert_ hinzu. So erfährt der Client, welche Zertifikate vollständig übersetzt sind.
- `i18nextCodes`: Das sind die ISO-Sprachcodes für jede Sprache. Du musst den entsprechenden ISO-Code für die Sprache hinzufügen, die du aktivieren willst. Diese müssen für jede Sprache einzigartig sein.
- `langDisplayNames`: Dies sind die Anzeigenamen für den Sprachauswahlschalter im Navigationsmenü.
- `langCodes`: Dies sind die Sprachcodes, die für die Formatierung von Daten und Zahlen verwendet werden. Dies sollten Unicode CLDR-Codes statt ISO-Codes sein.

Wenn du zum Beispiel Dothraki als Sprache aktivieren möchtest, sollten deine `all-langs.js`-Objekte wie folgt aussehen:

```js
const availableLangs = {
  client: ['english', 'espanol', 'chinese', 'chinese-traditional', 'dothraki'],
  curriculum: [
    'english',
    'espanol',
    'chinese',
    'chinese-traditional',
    'dothraki'
  ]
};

export const auditedCerts = {
  espanol: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis
  ],
  chinese: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  'chinese-traditional': [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  dothraki: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
};

const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};

const langDisplayNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文（简体字）',
  'chinese-traditional': '中文（繁體字）',
  dothraki: 'Dothraki'
};

const langCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};
```

Als nächstes öffnest du die Datei `client/src/utils/algolia-locale-setup.ts`. Diese Daten werden für die Suchleiste verwendet, die `/news `-Artikel lädt. Es ist zwar unwahrscheinlich, dass du diese Funktion testen wirst, aber das Fehlen der Daten für deine Sprache kann zu Fehlern führen, wenn du versuchst, die Codebasis lokal zu erstellen.

Füge ein Objekt für deine Sprache zum `algoliaIndices`-Objekt hinzu. Du solltest die Werte für das `english`-Objekt für lokale Tests verwenden, indem du den Schlüssel `english` durch den Wert für deine Sprache `availableLangs` ersetzt.

> [!NOTE] Wenn wir bereits eine Instanz von news in deiner Zielsprache bereitgestellt haben, kannst du die Werte aktualisieren, damit sie die Live-Instanz widerspiegeln. Andernfalls verwendest du die englischen Werte.

Wenn du Dothraki hinzufügen würdest:

```js
const algoliaIndices = {
  english: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  espanol: {
    name: 'news-es',
    searchPage: 'https://www.freecodecamp.org/espanol/news/search/'
  },
  chinese: {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search/'
  },
  'chinese-traditional': {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search'
  },
  dothraki: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  }
};
```

Schließlich stellst du in deiner `.env`-Datei `CLIENT_LOCALE` und `CURRICULUM_LOCALE` auf deine neue Sprache ein (verwende den `availableLangs` Wert).

```txt
CLIENT_LOCALE="dothraki"
CURRICULUM_LOCALE="dothraki"
```

## Aktivieren von lokalisierten Videos

Für die Videoaufgaben musst du ein paar Dinge ändern. Zuerst fügst du die neue Sprache (Locale) zur GraphQL-Abfrage in der `client/src/templates/Challenges/video/Show.tsx` Datei hinzu. Füge zum Beispiel Dothraki zur Abfrage hinzu:

```tsx
  query VideoChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      videoId
      videoLocaleIds {
        espanol
        italian
        portuguese
        dothraki
      }
      ...
```

Füge dann eine ID für die neue Sprache zu jeder Videoaufgabe in einem auditierten Block hinzu. Wenn zum Beispiel `auditedCerts` in `all-langs.ts` `scientific-computing-with-python` für `dothraki` enthält, dann musst du einen `dothraki`-Eintrag in `videoLocaleIds` hinzufügen. Das Frontmatter sollte dann so aussehen:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

Aktualisiere das `VideoLocaleIds` Interface in `client/src/redux/prop-types`, um die neue Sprache aufzunehmen.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

Und schließlich aktualisiere das Aufgabenschema in `curriculum/schema/challengeSchema.js`.

```js
videoLocaleIds: Joi.when('challengeType', {
  is: challengeTypes.video,
  then: Joi.object().keys({
    espanol: Joi.string(),
    italian: Joi.string(),
    portuguese: Joi.string(),
    dothraki: Joi.string()
  })
}),
```

## Übersetzungen laden

Da die Sprache noch nicht für die Produktion freigegeben wurde, laden unsere Skripte die Übersetzungen noch nicht automatisch herunter. Nur Mitarbeiter (Staffs) haben den Zugang, um die Übersetzungen direkt herunterzuladen - du kannst uns gerne in unserem [Contributors Chat Room](https://chat.freecodecamp.org/channel/contributors) ansprechen, oder du kannst die englischen Markdown-Dateien zu Testzwecken lokal übersetzen.

Sobald du die Dateien hast, musst du sie im richtigen Verzeichnis ablegen. Für die Studienplanaufgaben solltest du die Zertifizierungsordner (z.B. `01-responsive-web-design`) in das Verzeichnis `curriculum/challenges/{lang}` ablegen. Für unsere Dothraki-Übersetzungen wäre das `curriculum/challenges/dothraki`. Die Client-Übersetzungsdateien `.json` werden im Verzeichnis `client/i18n/locales/{lang}` abgelegt.

Sobald du diese Einstellungen vorgenommen hast, solltest du `npm run develop` ausführen können, um deine übersetzte Version von freeCodeCamp anzuzeigen.

> [!ATTENTION] Du kannst zwar lokal Übersetzungen zu Testzwecken vornehmen, aber wir erinnern alle daran, dass Übersetzungen _nicht_ über GitHub eingereicht werden sollten und nur über Crowdin erfolgen sollten. Achte darauf, dass du deine lokale Codebasis zurücksetzt, wenn du mit dem Testen fertig bist.
