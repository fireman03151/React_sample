<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# freeCodeCamp를 로컬 시스템에 설치하기
local 시스템에 freeCodeCamp를 설치하려고 하신다면 이 가이드라인을 따라 주세요. 주기적으로 기여 해 주실 생각이라면 이를 추천해 드립니다.

예를 들어서 가이드나 코딩챌린지 페이지 미리 보기라든지 코드를 디버깅하거나 버그를 고치는 등의 몇 가지 기여 흐름도는 여러분에게 freeCodeCamp를 local하게 진행하기를 기대합니다.

## GitHub에 있는 저장소를 복사하기
['Forking'](https://help.github.com/articles/about-forks/)은 여러분만의 GitHub에 있는 freeCodeCamp의 주요 저장소의 복사본을 갖게 해 줍니다.

이는 아주 중요합니다. GitHub에 있는 freeCodeCamp의 복사본을 갖게 해 주거나 저장소를 다운받아 local하게 작업하도록 도와주기 때문입니다. 후에, 여러분이 local하게 작업한 결과물을 fork를 통해 여러분이 가지고 있는 복사본에서 메인 저장소로 옮기는 것을 pull request를 통해 요청할 수 있습니다.

> **Pro Tip:**
> `https://github.com/freeCodeCamp/freeCodeCamp`에 있는 메인 저장소는 `upstream` 저장소로도 불립니다.
> `https://github.com/YOUR_USER_NAME/freeCodeCamp`에 있는 fork(역주: 복사본)는 `origin`이라고 불리기도 합니다.

#### 저장소 `https://github.com/freeCodeCamp/freeCodeCamp`를 fork 하는 방법
1. GitHub에 있는 freeCodeCamp 저장소로 갑니다: <https://github.com/freeCodeCamp/freeCodeCamp>
2. 오른쪽 위에 위치한 "Fork" 버튼을 누릅니다. ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. 저장소가 제대로 fork되었다면, `https://github.com/YOUR_USER_NAME/freeCodeCamp`에서 freeCodeCamp 저장소의 복사본을 확인하실 수 있습니다.

![GIF - How to fork freeCodeCamp on GitHub](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## 개발환경 준비하기
사전에 필요한 것들을 설치했다면 개발 환경을 준비해 봅시다. 이는 흔한 개발 작업 방식이며 한 번만 하시면 됩니다.

#### 개발 환경 준비하는 방법:
1. 아직 [Git](https://git-scm.com/)이나 Git 클라이언트(서버로부터 정보나 서비스를 받는 컴퓨터)가 없다면 설치하세요. 컴퓨터에 운영체제와 함께 깔려있던 버전이 오래된 것일 수 있으니 최신 버전으로 업데이트해 주세요.

2. (선택사항이나 추천해 드립니다) [GitHub에 SSH 키 셋업하기](https://help.github.com/articles/generating-an-ssh-key/)

3. 자신에게 맞는 에디터 설치하기
    [VS Code](https://code.visualstudio.com/)나 [Atom](https://atom.io/)을 추천해 드립니다. 이 두 에디터는 잘 만들어졌으며 무료이고 오픈 소스 에디터들입니다.

4. 에디터에 linting 설치하기
    반드시 [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html)를 설치해 주세요. 이는 [freeCodeCamp의 자바스크립트 스타일 가이드](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121)와 일치하지 않는 부분을 표시해 줄 겁니다.

    > linting 에러들을 그냥 지나치지 말아 주세요. 이것들은 여러분을 **도와주려는** 목적이며, 간결한 코드를 유지하도록 해 줍니다.

## freeCodeCamp의 복사본을 복제하기
['Cloning'](https://help.github.com/articles/cloning-a-repository/)은 여러분 혹은 다른 사람의 소유인 '원격(remote)' 장소에서 **다운로드**한 저장소의 복사본입니다. 여러분의 경우, 이 원격 장소는 freeCodeCamp 저장소의 '분기(fork)'로 `https://github.com/YOUR_USER_NAME/freeCodeCamp`에서 확인할 수 있어야 합니다.

내 컴퓨터에서 아래 명령어를 실행하세요:

1. 터미널을 열고 / 명령어 프롬프트 / 프로젝트 디렉터리에 있는 셸

    _예를 들어서: `/프로젝트 디렉터리/`_

2. `YOUR_USER_NAME`을 여러분의 깃허브 아이디로 바꾼 다음에 freeCodeCamp의 복사본을 복제하세요.

    ```sh
    git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
    ```

이는 전체 freeCodeCamp 저장소를 여러분의 디렉터리로 다운로드되도록 할 것입니다.

노트: `--depth=1`은 여러분이 복사한 저장소를 최근에 이루어진 history와 commit만을 겉핥기식으로 복제합니다.


## 메인 저장소에 `upstream` 설치하기
지금까지 여러분은 fork의 복사본을 다운로드했고, 이제 `upstream`을 설치할 차례입니다.

이전에도 언급했듯이, `https://github.com/freeCodeCamp/freeCodeCamp`에 있는 메인 저장소는 종종 `upstream` 저장소로도 종종 불립니다. `https://github.com/YOUR_USER_NAME/freeCodeCamp`에 있는 여러분의 fork(역주: 복사본)은 `origin` 저장소로도 불릴 겁니다. 

`origin` 저장소 외에도 로컬 클론에서 `upstream` 저장소에 대한 참조가 필요합니다. 그럼으로써 여러분은 메인 저장소의 변경 사항을 번거롭게 복사와 복제를 매번 할 필요 없이 동기화시킬 수 있습니다.


1. 방금 복사한 freeCodeCamp 디렉터리로 갑니다:

    ```sh
    cd freeCodeCamp
    ```

2. freeCodeCamp 메인 저장소로의 원격 참조를 추가합니다:

    ```sh
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3. 제대로 되었는지 확인합니다:

    ```sh
    git remote -v
    ```

    결과물이 아래와 비슷하여야 합니다:

    ```sh
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```

## freeCodeCamp를 개인 컴퓨터에서 사용하기
여러분은 freeCodeCamp 복사본을 가지고 있습니다. 아래 가이드를 따라서 오시면 local에서 이를 실행시킬 수 있습니다. 이는 여러분이 아래 사항들을 할 수 있도록 도와줍니다:

- 학습 플랫폼에 나타날 페이지의 편집 내용을 미리 보기
- UI 관련 문제 및 개선 작업
- 응용 프로그램 서버와 클라이언트 응용 프로그램 관련 문제 디버깅 및 수정

단순히 파일을 편집하거나 `rebase`를 수행하거나 `merge` 충돌을 해결하는 경우 local 에서 freeCodeCamp 실행을 건너뛸 수 있습니다. 나중에 언제든지 이 부분으로 돌아올 수 있습니다.

[내 컴퓨터에서의 freeCodeCamp 실행 건너뛰기](#making-changes-to-your-clone-of-freecodecamp-locally)

현재 freeCodeCamp를 local에서 실행하는 두 가지 방법이 있습니다.
- Docker (추천)
- Local

여러분에게 위의 방법 중 **하나를** 따를 것을 권해 드립니다.

Docker는 설치 과정에 오류가 적고 이상적인 개발자 환경을 제공합니다. Docker를 사용하여 우리에게 보이지 않지만 추가로 필요할 소프트웨어들을 설치합니다. 이는 대부분 기계/운영체제 전반에 걸쳐 일관되고 안정적으로 지원될 겁니다.

만약에 여러분이 위의 한 방법을 사용하는데 문제가 생긴다면, 다른 방법을 시도해 보세요. 만약에 두 가지 방법에서 모두 문제가 발생한다면, 첫 번째로 해당 문제에 관해서 인터넷 검색을 통해 해결 방법을 찾아 보세요. 찾지 못하셨다면 한 번 GitHub [issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) 페이지에 다른 개발자가 같은 문제를 제기한 건 없는지 보고 이도 없으면 문제점을 보고해 주세요.

그리고 언제나 부담 없이 [기여자 대화방](https://gitter.im/FreeCodeCamp/Contributors)에 들러 주세요. 빠른 질문과 답변이 오고 갑니다.

### 사전에 필요한 것들 설치하기
사전에 필요한 소프트웨어들을 설치하는 것으로 시작해 봅시다:

소프트웨어는 Docker와 local에 모두 필요합니다:

| Prerequisite | Version | Notes |
| ------------ | ------- | ----- |
| [Node.js](http://nodejs.org)| `10.x`  | [LTS Schedule](https://github.com/nodejs/Release#release-schedule) |
| npm (comes bundled with Node)| `6.x`   | Does not have LTS releases, we use the version bundled with Node LTS |

**Docker에 추가로 필요한:**

| 사전에 필요한 소프트웨어 | 버전 | 노트 |
| ------------ | ------- | ----- |
| [Docker CE](https://docs.docker.com/install/) | `Stable` | - |
| [Docker Compose](https://docs.docker.com/compose/install/) | `Stable` | 운영체제가 macOS나 Windows가 아니면 따로 설치해 주셔야 합니다 |

**local에 추가로 필요한:**

| 사전에 필요한 소프트웨어 | 버전 | 노트 |
| ------------ | ------- | ----- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Release Notes](https://docs.mongodb.com/manual/release-notes/), 노트: 현재 `3.6` 버전을 사용 중이며, [업그레이드가 필요하면](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

#### 중요:
위의 소프트웨어들을 항상 최신 버전으로 업데이트해서 사용하실 것을 권해드립니다. 이는 Long Term Support (LTS) 로도 알려져 있습니다.
만약에 Node.js가 컴퓨터에 설치되어있다면, 아래 명령어를 통해 현재 버전을 확인하실 수 있습니다:

```sh
node -v
npm -v
```
 
만약 다른 버전을 가지고 있다면, 권해드리는 버전으로 설치해 주세요. 저희는 해당 버전에서 발생한 문제점만 도와드릴 수 있습니다.

윈도우 사용자:
> 사용하시는 명령어 도구(예를 들어, cmd, PowerShell, Git Bash for Windows, WSL)에 올바른 사용자 권한으로 반드시 설정되어 있도록 하세요. 가능하다면, 해당 툴을 관리자 모드로 설정하세요. 윈도우에서는 관리자 모드로 변경하려면 해당 프로그램에서 오른쪽 클릭 후에 `Launch as an Administrator`를 선택하시면 됩니다.

#### 사전에 필요한 소프트웨어를 설치하는 데 어려움을 겪고 있습니다. 어떻게 해야 할까요?
저희는 macOS 10.12나 Ubuntu 16.04, Windows 10처럼 많이 사용하는 운영체제의 최신 버전에 대해서 주기적으로 개발을 진행하고 있습니다. 직면하신 해당 문제점을 Google이나 Stack Overflow, Stack Exchange 등에서 검색해 보실 것을 권해드립니다. 앞서 다른 이가 같은 문제점에 대해서 도움을 구해 답을 얻었을 확률이 높습니다.

만약 다른 운영체제를 사용하거나 여전히 문제를 해결하지 못했다면 [contributors community on our public forum](https://www.freeCodeCamp.org/forum/c/contributors)이나 [contributor's chat room](https://gitter.im/freeCodeCamp/Contributors)으로 연락해주세요.

**사전에 필요한 소프트웨어들에 대한 문제점들을 GitHub 이슈화 하는 거는 삼가해 주세요. 이는 freeCodeCamp 프로젝트와는 무관하기 때문입니다.**

### Dependencies 환경 설정하기

#### 첫 번째 단계: 환경(Environment Variable File) 설정하기
미리 설정된 API keys와 environmet variables는 `sample.env` 파일에 저장되어 있습니다. 이 파일은 설치단계에서 동적으로 접근할 수 있는 새로운 이름의 `.env` 파일로 복사되어야 합니다. 


```sh
# "sample.env"를 복사해서 ".env"라고 이름 지으세요.
# 필요한 API keys와 secrets로 채우세요:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

`.env` 파일에 있는 keys는 app을 local 하게 돌리기 위해 변경될 필요가 *없습니다.* `sample.env`에서 복사된 미리 설정된 값들 그대로 두셔도 됩니다.

다만 명심하실 것은 추가적인 서비스를 이용하려 하실 때에는 해당 서비스에 대한 개별 API keys를 획득하신 이후에 `.env` 파일을 변경해 주셔야 합니다.

**Docker Build:** Docker build를 이용하는데 Docker 설치가 Docker Toolbox (macOS와 Windows 오랜 버전에 적용되는)를 사용하도록 지시한다면, `.env` 파일 안에 있는 `DOCKER_HOST_LOCATION`을 `docker-machine ip` 명령어의 결과물로 변경해 주셔야 합니다. 만약 Linux처럼 Docker를 지원하는 운영체제를 사용하거나 Docker 데스크톱을 (macOS나 Windows 10의 최신 버전) 사용 중이라면 `DOCKER_HOST_LOCATION`을 이미 설정된 값으로 남겨 두셔도 됩니다.

#### 두 번째 단계: Dependencies 설치하기

이 단계에서는 애플리케이션을 실행시키기 위해서 필요한 dependencies를 설치합니다.

**Docker Build:**
```shell
npm run docker:init
npm run docker:install
npm run docker:seed
```

위의 각 Docker 명령어는 실행을 완료하는 데 시간이 좀 필요합니다. 다음 명령어를 실행하기 전에 각 명령어가 완전히 실행 완료될 때까지 기다리셔야 합니다.

Docker 외에도 npm packages 몇 가지를 설치하셔야 합니다. git을 사용하지 않고 local에서만 app를 실행하실 예정이라면 건너뛰셔도 됩니다.

```shell
npm ci
```

위의 모든 사항은 local 개발 환경을 설정할 때 한 번만 실행하시면 됩니다.

**Local Build:**

```sh
# Install NPM dependencies
npm ci
```

#### 세 번째 단계: MongoDB 시작하기 & 데이터베이스 준비하기 (local build만)

이 단계는 local build 시에만 해당하니 Docker build를 사용하시면 네 번째 단계로 가주세요.

MongoDB가 설치될 때 자동으로 설정된 사항과 다르지 않은 한 `.env`파일에 있는 `MONGOHQ_URL`로 저장된 URL이 잘 작동되어야 합니다. 이전에 한 번 수정한 적이 있으면, 이 단계를 실행하기 위해서 필요한 값으로 재설정해 주셔야 합니다.

애플리케이션을 로컬에서 실행하기 전에, MongoDB를 먼저 시작해 주셔야 합니다:

각기 다른 터미널에서 MongoDB 서버 시작하기:
- On macOS & Ubuntu:

    ```sh
    mongod
    ```

- 윈도우스에서는 전체 경로를 'mongod' binary로 구체적으로 설정해 주셔야 합니다.

    ```sh
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

    `3.6`을 여러분의 컴퓨터에 설치된 버전으로 변경해 주세요.

> Pro Tip:
> 바탕화면에 MongoDB를 설치하면 매번 시작해야 하는 수고로움을 피할 수 있습니다.
> [MongoDB 사이트에서 각 운영체제를 위한 문서 읽어보기](https://docs.mongodb.com/manual/administration/install-community/)

다음으로는 데이트베이스를 준비해 봅니다. 이 단계에서는 서비스에 필요한 초기 데이터로 MongDB 서버를 채울 명령어를 실행합니다. 다른 것들과 함께 몇 가지 schemes를 포함합니다.

```sh
npm run seed
```

#### 네 번째 단계: freeCodeCamp client application과 API server 시작하기
이제 API server와 client applications를 시작할 수 있습니다.

**Docker Build:**
```shell
npm run docker:develop
```

**Local Build:**
```sh
npm run develop
```

이 명령어 한 줄은 API server와 client applications를 포함해 모든 서비스를 여러분이 사용할 수 있도록 시작합니다. 

일단 준비되면, 웹브라우저를 열어 <http://localhost:8000>로 방문하세요. app이 실행된다면 축하드립니다 - 다 하셨습니다!

> Pro Tip:
> API Server는 APIs를 `http://localhost:3000`에서 지원합니다.
> Gatsby app은 client application을 `http://localhost:8000`에서 지원합니다.

<http://localhost:3000/explorer>방문하시면 사용 가능한 APIs를 확인하실 수 있습니다.

축하드려요 🎉🎉🎉! 이제 여러분의 local 컴퓨터에서 freeCodeCamp 전체 학습 플랫폼의 복사본을 실행하실 수 있게 되었습니다.

## 로컬에서 작업할 때 로그인하는 방법
로컬 설정이 자동으로 로컬 사용자를 데이터베이스에 생성합니다. `Sign In` 버튼을 클릭하면 local application으로 접속하게 해 줄 겁니다.

하지만 사용자 포트폴리오 페이지에 접속하는 것은 조금 다릅니다. Gatsby가 client 측 페이지를 다루기 때문에 여러분의 컴퓨터에서 사용자 포트폴리오로 접속하면 `404`페이지를 보시게 될 겁니다.

`Preview Custom 404 Page` 버튼을 클릭하면 올바른 화면으로 이동 시켜 줄 겁니다.

![Image - How to sign in when working locally](https://user-images.githubusercontent.com/1884376/52650951-48922e80-2f11-11e9-9eee-360a25ad28ad.gif)

## 내 컴퓨터에서(when working locally) 개발할 때 참조하면 좋을 명령어들

내 컴퓨터 작업 환경에서 유용하게 참조할 수 있는 명령어들

**Docker Build:**

| command | description |
| ------- | ----------- |
| `npm run docker:init` | Dependencies를 설치할 자리 준비하기 |
| `npm run docker:install` | 모든 dependencies 설치 / 재설치하기 및 다른 서비스 부트스트랩 하기(불러오기) |
| `npm run docker:seed` | 모든 challenge markdown 파일 분석해서 MongoDB에 넣기|
| `npm run docker:develop` | freeCodeCamp API 서버와 Client 애플리케이션 시작하기 |
| `npm run docker:test:init` | Docker에서 테스트하는데 필요한 것들을 데려옵니다. |
| `npm run docker:test -- -c "npm run test` | Client, 서버, lint, challenge tests를 포함한 시스템에 있는 모든 JS tests 실행하기 |
| `npm run docker:test -- -c "npm run test:curriculum` | 커리큘럼 테스트 suite를 실행하기 |
| `npm run docker:test -- -c "npm run test:client` | Client 테스트 suite 실행하기 |
| `npm run docker:test -- -c "npm run test:server` | Server 테스트 suite 실행하기 |
| `npm run docker:clean` | 모든 dependencies 삭제하고 캐시 정리하기 |

**Local Build:**

| command | description |
| ------- | ----------- |
| `npm ci` | 모든 dependencies 설치 / 재설치하기 및 다른 서비스 부트스트랩하기(불러오기) |
| `npm run seed` | 모든 challenge markdown 파일 분석해서 MongoDB에 넣기 |
| `npm run develop` | freeCodeCamp API 서버와 Client 애플리케이션 시작하기 |
| `npm test` | Client, 서버, lint, challenge tests를 포함한 시스템에 있는 모든 JS tests 실행하기 |
| `npm run test:client` | Client 테스트 suite 실행하기  |
| `npm run test:curriculum` | 커리큘럼 테스트 suite를 실행하기 |
| `npm run test:server` | Server 테스트 suite 실행하기 |
| `npm run clean` | 모든 dependencies 삭제하고 캐시 정리하기 |


## 여러분의 컴퓨터에서 freeCodeCamp 복사본을 수정하기
이제 여러분은 파일을 수정하고 commit 할 수 있습니다.

아래 단계를 따라 하세요:

1. `master` 브랜치에 있는지 확인하세요.

    ```sh
    git status
    ```

    아래와 같은 메시지가 보여야 합니다:

    ```sh
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    master에 있지 않거나 working directory에 처리해야 할 무언가가 있으면, 그게 파일이든 commit이든 간에 처리한 다음 `master` 브랜치로 갑니다:

    ```sh
    git checkout master
    ```

2. freeCodeCamp upstream `master` 브랜치의 최신 변경사항을 여러분의 지역 저장소(역주: 내 컴퓨터)에 있는 master 브랜치와 동일하게 만드세요.

    **노트:** 만약에 여러분이 fork 한 master 브랜치에 만든 Pull Request가 아직 미해결 상태이면, 이 단계 마지막에서 그 부분을 잃게 될 겁니다. 이 단계를 진행하기 전에 moderator로부터 해당 pull request가 병합될 수 있도록 하세요. 이런 일을 방지하려면 *언제나* master가 아닌 개별 브랜치에서 개발을 진행하셔야 합니다.

    이 단계는 freeCodeCamp의 메인 저장소의 **최신 변경사항으로 동기화시킵니다**. 나중에 생길 수 있는 충돌을 피하기 위해서는 `upstream/master`로 여러분의 브랜치를 자주 rebase 시키는 게 중요합니다.

    freeCodeCamp 원격 저장소를 복사한 여러분의 지역 저장소를 업데이트합니다:
    ```sh
    git fetch upstream
    ```

    여러분의 master 브랜치를 freeCodeCamp 원격 저장소의 master 브랜치와 하드 리셋합니다:

    ```sh
    git reset --hard upstream/master
    ```

    GitHub에 있는 여러분의 fork 히스토리가 깨끗하도록 여러분의 master 브랜치를 원격 저장소로 push 합니다:

    ```sh
    git push origin master --force
    ```

    diff를 사용해서 여러분의 현재 master가 upstream/master와 일치하는지 확인할 수 있습니다:

    ```sh
    git diff upstream/master
    ```

    결과물로 아무것도 없어야 합니다.

3. 새로운 브랜치를 생성하세요.

    이슈마다 브랜치를 따로 만들어 일하는 게 여러분이 개발을 깔끔하게 하도록 도와줍니다. `master`에서 절대 일을 진행하지 마세요. 이는 freeCodeCamp 복사본을 엉망으로 만들어 새로운 clone이나 fork 복사본에서 일을 다시 하게 만들 수 있습니다. 

    앞에서 설명했듯이 `master`에 있는지 확인하신 다음, 거기에다 다른 브랜치를 만드세요: 

    ```sh
    git checkout -b fix/update-guide-for-xyz
    ```

    브랜치 이름은 반드시 `fix/`, `feat/`, `docs/`, 등으로 시작해야 합니다. 브랜치와 연동된 issue numbers는 사용하지 않도록 합니다. 짧고, 읽었을 때 무엇을 하려는지 짐작할 수 있으면서 다른 이름과 헷갈리지 않도록 합니다.

    몇가 지 좋은 브랜치 이름의 예로는:

    ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. 여러분이 사용하는 텍스트 에디터에서 페이지 및 코드를 수정하세요.

5. 수정사항이 마음에 들면 여러분의 컴퓨터에서 freeCodeCamp에 어떻게 반영되는지 미리 보기 하도록 하세요.

6. 여러분의 수정사항에 에러는 없는지 전체 구성이 올바른지 확인하세요. 저희는 [docs](/docs/)에 가이드 문서와 코딩 챌린지에 대한 스타일 가이드가 따로 있습니다.

7. 업데이트한 파일을 확인하세요.

    ```sh
    git status
    ```

    이는 여러분이 수정하였으나 아직 `unstaged` 상태의 파일 목록을 보여줍니다.

    ```sh
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ...
    ```

8. 변경사항을 stage 화하고 commit 합니다.

    이 단계에서 여러분은 여러분이 만들었거나 수정한 파일만을 작업해야 합니다. 필요한 파일만 선택적으로 작업할 수 있습니다.

    ```sh
    git add path/to/my/changed/file.ext
    ```

    아니면 모든 `unstaged` 파일을 staging area로 올릴 수 있습니다:

    ```sh
    git add .
    ```

    staging area에 올라 온 파일들만을 commit 할 수 있습니다.

    ```sh
    git status
    ```

    Output:
    ```sh
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ```

    아래처럼 짧은 메시지와 함께 변경사항을 commit 할 수 있습니다:

    ```sh
    git commit -m "fix: 짧은 commit 메시지"
    ```

    몇가지 예:

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    선택사항:

    이미 다른 개발자들이 사용하고 있는 commit 메시지를 여러분도 사용할 것을 권해드립니다. 현재 활발하게 진행 중인 오픈 소스 저장소들에서 확인하실 수 있을 겁니다. 개발자로서 이는 권장될 만한 연습 방법입니다.

    자주 볼 수 있는 commit 메시지의 몇 가지 예:

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    50글자 이상으로 넘어가지 않도록 짧게 만듭니다. 비교적 긴 부가 설명이 필요하면 commit 메시지 외에 description을 사용하면 됩니다.

    This does not take any additional time than an unconventional message like 'update file' or 'add index.md'

    왜 이러한 commits를 이용해야 하는지 더 궁금하면 [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)를 읽어보세요.

9. commit 이후에 파일을 수정하거나 commit 메시지를 업데이트하고 싶으면:

    ```sh
    git commit --amend
    ```

    이는 `nano`나 `vi` 같이 자동 설정된 텍스트 에디터를 열어 여러분이 commit 메시지나 제목, 설명란을 추가하거나 수정할 수 있게 해 줍니다.

10. 다음으로, 변경사항을 여러분의 fork로 push 할 수 있습니다.

    ```sh
    git push origin branch/name-here
    ```

## Pull Request (PR) 요청하기
변경사항을 commit 하신 다음에는 [Pull Request 만들기](/docs/how-to-open-a-pull-request.md)를 읽어 보세요.

## 도움 요청하기
도움이 필요하시면 ['Contributors' category on our forum](https://www.freecodecamp.org/forum/c/contributors)이나 Gitter에 있는 [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors)으로 질문을 남겨 주세요.

문제가 무언지 식별하도록 도와줄 브라우저 콘솔이나 Bash / 터미널 / 명령어에 에러가 있을 수 있습니다. 이러한 에러 메시지를 질문할 때 포함해 주세요. 이는 다른 이들이 여러분이 직면한 문제가 무엇인지 더 쉽게 파악해서 도움을 줄 수 있습니다. 

### Troubleshooting
앱은 실행되는데 보여야 할 폰트가 안 보이는 UI 쪽에 문제가 있거나 코드 에디터가 제대로 보이지 않으면 여러분의 컴퓨터(로컬)에 설정한 거에 따라 아래를 참조하세요:

**Docker Build:**
```sh
# We use a mono repo and have multiple components (server, client, tools, plugins, etc.)
# Use this command to clean up all dependencies in all of the components
npm run docker:clean

# Reinstall npm packages
npm run docker:install

# Seed the database
npm run docker:seed

# Restart the application
npm run docker:develop
```

**Local Build:**
```sh
npm run clean
npm ci
npm run seed
npm run develop
```

로그인되는 대신 freeCodeCamp에 보고될 거라는 에러 메시지가 있는 창을 보게 되면 내 컴퓨터 내에서 포트 3000이 다른 프로그램에 의해 사용되고 있지는 않은지 꼭 확인해 보세요.


dependencies 설치하는 동안에 에러가 생기면 제한된 네트워크 환경에 있지는 않은지, 해당 자원에 접근하지 못하도록 방화벽이 설정되진 않았는지 확인해 보세요. 한 가지 해결책으로는 VPN 서비스를 해당 환경에서 사용할 수 있도록 허용하는 겁니다.
