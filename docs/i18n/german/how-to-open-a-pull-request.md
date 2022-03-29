# Wie man einen Pull-Request (PR) öffnet

Ein Pull-Request (PR) ermöglicht es dir, Änderungen von deinem Fork auf GitHub an FreeCodeCamp.orgs Hauptrepository zu senden. Wenn du mit den Änderungen am Code fertig bist, kannst du diese Richtlinien befolgen, um einen PR zu eröffnen.

> [!NOTE] Dein PR sollte in Englisch verfasst sein. Schaue [hier](index.md#translations) nach, wie du Übersetzungen beisteuern kannst.

## Bereite einen guten PR-Titel vor

Wir empfehlen, [konventionelle Titel und Nachrichten](https://www.conventionalcommits.org/) für Commits und Pull-Requests zu verwenden. Die Konvention hat das folgende Format:

> `<type>([optional scope(s)]): <description>`
> 
> Zum Beispiel:
> 
> `fix(learn): tests for the do...while loop challenge`

Wenn du einen Pull-Request (PR) öffnest, kannst du den Typ, den Geltungsbereich \[scope\] (optional) und die Beschreibung wie folgt festlegen.

**Typ:**

| Typ   | Wann wählen                                                                                      |
|:----- |:------------------------------------------------------------------------------------------------ |
| fix   | Geänderte oder aktualisierte/verbesserte Funktionalität, Tests, der Wortlaut einer Lektion, usw. |
| feat  | Nur wenn du neue Funktionen, Tests usw. hinzufügst.                                              |
| chore | Änderungen, die sich nicht auf den Code, die Tests oder den Wortlaut einer Lektion beziehen.     |
| docs  | Änderungen im Verzeichnis `/docs` oder in den Mitwirkungsrichtlinien, etc.                       |

**Geltungsbereich (Scope):**

Du kannst einen Geltungsbereich aus [dieser Liste von Labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope) auswählen.

**Beschreibung:**

Halte sie kurz (weniger als 30 Zeichen) und einfach. Du kannst weitere Informationen im PR-Beschreibungsfeld und in den Kommentaren hinzufügen.

Einige Beispiele für gute PR-Titel wären:

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): Chinese translation of local setup`

## Einen Pull-Request vorschlagen

1. Sobald die Änderungen übertragen wurden, wirst du aufgefordert, einen Pull-Request auf der GitHub-Seite deines Forks zu erstellen.

   ![Bild - Vergleiche & Pull-Request Aufforderung auf GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

2. Grundsätzlich sollten alle Pull-Requests gegen das Haupt-Repository von freeCodeCamp, den `main`-Branch, gerichtet sein.

   Stelle sicher, dass dein Base Fork auf freeCodeCamp/freeCodeCamp eingestellt ist, wenn du einen Pull-Request einreichst.

   ![Bild - Vergleiche Gabelungen beim Pull Request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

3. Übermittle den Pull-Request von deinem Branch an den `main`-Branch von freeCodeCamp.

4. Im Hauptteil deines PR fügst du eine ausführlichere Zusammenfassung der Änderungen ein, die du vorgenommen hast und warum.

   - Du erhältst eine Vorlage für einen Pull-Request. Dies ist eine Checkliste, die du befolgen solltest, bevor du den Pull-Request öffnest.

   - Fülle die Details so aus, wie du es für richtig hältst. Diese Informationen werden geprüft und die Prüfer entscheiden, ob dein Pull-Request angenommen wird oder nicht.

   - Wenn der PR ein bestehendes GitHub Problem beheben soll, dann am Ende von der Beschreibungstext deines PR verwenden Sie das Schlüsselwort _Schließt_ mit der Ticketnummer zu [automatisch schließen, wenn der PR akzeptiert und zusammengeführt wird](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Beispiel: `Closes #123` wird Issue 123 schließen

5. Gib an, ob du auf einer lokalen Kopie der Website getestet hast oder nicht.

   - Das ist sehr wichtig, wenn du Änderungen vornimmst, die nicht nur Textinhalte wie die Dokumentation oder eine Aufgabenbeschreibung betreffen. Beispiele für Änderungen, die lokal getestet werden müssen, sind JavaScript, CSS oder HTML, die die Funktionalität oder das Layout einer Seite verändern könnten.

   - Wenn dein PR das Verhalten einer Seite beeinflusst, sollte er von entsprechenden [Cypress Integrationstests](how-to-add-cypress-tests.md) begleitet werden.

## Feedback zu Pull-Requests

> :tada: für die Erstellung eines PR und vielen Dank, dass du dir die Zeit genommen haben, einen Beitrag zu leisten.

Unsere Moderatoren werden jetzt einen Blick darauf werfen und dir ein Feedback hinterlassen. Bitte habe Geduld mit den anderen Moderatoren und respektiere ihre Zeit. Alle Pull-Requests werden zu gegebener Zeit überprüft.

Und wie immer kannst du Fragen in der [Kategorie 'Contributors' in unserem Forum](https://forum.freecodecamp.org/c/contributors) oder im [Chatraum für Mitwirkende](https://chat.freecodecamp.org/channel/contributors) stellen.

> [!TIP] Wenn du mehr Pull-Requests beisteuern willst, empfehlen wir dir, die [Richtlinien für Änderungen und Synchronisierung](how-to-setup-freecodecamp-locally.md#making-changes-locally) zu lesen, damit du deinen Fork nicht löschen musst.

## Konflikte bei Pull-Requests

Es kann zu Konflikten kommen, weil viele Mitwirkende an dem Repository arbeiten und Änderungen deinen PR zerstören können, der noch auf eine Überprüfung und Zusammenführung wartet.

In den meisten Fällen brauchst du keinen Rebase, da wir alle Commits vernichten. Wenn jedoch ein Rebase verlangt wird, solltest du wie folgt vorgehen.

### Für die üblichen Fehlerbehebungen und Funktionen

Wenn du an regulären Bugs und Features auf unserem Entwicklungszweig `main` arbeitest, kannst du einen einfachen Rebase durchführen:

1. Rebase deiner lokalen Kopie:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Löse alle Konflikte und füge Commits hinzu / bzw. bearbeite sie

   ```console
   # Either
   git add .
   git commit -m "chore: resolve conflicts"

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. Schiebe deine Änderungen in den PR zurück

   ```console
   git push --force origin <pr-branch>
   ```

### Für anstehende Studienpläne und Features

Wenn du an Funktionen für unseren kommenden `next-*`-Branch arbeitest, musst du Rosinenpickerei betreiben:

1. Achte darauf, dass dein Upstream mit deinem Local übereinstimmt:

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Backup erstellen

   a. Entweder löschst du deinen lokalen Branch, nachdem du ein Backup gemacht hast (wenn du ihn noch lokal hast):

   ```console
   git checkout <pr-branch-name>

   # Beispiel:
   # git checkout feat/add-numpy-video-question

   git checkout -b <backup-branch-name>

   # Beispiel:
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-name>
   ```

   b. Oder einfach ein Backup deines PR-Branch (wenn du ihn nicht lokal hast):

   ```console
   git checkout -b <backup-branch-name> origin/<pr-branch-name>

   # Beispiel:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
   ```

3. Beginne mit einer weißen Weste:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. Beseitige alle Konflikte und räume auf, installiere Tests und führe sie durch

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # Beispiel:

   # npm run test:curriculum --superblock=python-for-everyone

   ```

5. Wenn alles gut aussieht, schickst du es zurück an den PR

   ```console
   git push --force origin <pr-branch-name>
   ```
