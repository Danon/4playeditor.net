### Aktualna wersja

Wersja **1.11.0**

### In progress

- Wpisanie znaku `` ` `` automatycznie dodaje odpowiadający drugi znak za kursorem
- Zaznaczenie tekstu i wciśnięcie `(`, `[`, `{`, `'` lub `"` otacza zaznaczenie nawiasami/znakami
- Dodanie dedykowanej komendy do formatowania kodu `` `inline` ``

### ChangeLog

- Poprawiono działnie klawiszy <kbd>Enter</kbd> oraz <kbd>Backspace</kbd> kiedy kursor był przed i za podglądem obrazu.
- Poprawiono mierzenie wysokości tekstu jeśli podgląd obrazu jest niższy niż linia.
- Poprawiono przechodzenie kursora dookoła podglądu
- Poprawiono crash edytora, kiedy obraz był ostatnim znakiem tekstu
- Poprawiono bug, kiedy przesuwanie obrazu Markdown podowało usunięcie ostatniego znaku
- Dodano podgląd obrazu linków Markdown
- Dodano dekorację przekreślenia dla taga `<del>`.
- Poprawiono działanie klawiszy przesuwania kursora w otoczeniu Markdownu
- Poprawienie oznaczników języków w autocomplete fragmentów kodu
- Użycie <kbd>Ctrl+Shift+V</kbd> wklei kod bez uwcześniejszych transformacji
- Wpisanie znaku `(`, `[`, `{`, `'` lub `"` automatycznie dodaje odpowiadający drugi znak za kursorem
- Poprawiono działanie <kbd>Enter</kbd> oraz <kbd>Backspac</kbd> na mobilnej wersji
- Dodano dekorację dla horizontal rule, `<hr/>`
- Dodanie dekoracji dla zaznaczenia, `<mark></mark>`
- Wcisnięcie <kbd>Tab</kbd> będąc w notacji klawisza przenosi kursor na koniec znacznika
- Dodano `index.d.ts`
- Zmieniliśmy skrót <kbd>Alt+C</kbd> na <kbd>Ctrl+Alt+C</kbd>
- Poprawiono wklejanie treści z zakończeniami linii CRLF
- Poprawiono cytowanie treści z zakończeniami linii CRLF
- Poprawiono edycję treści z zakończeniami linii CRLF
- Automatyczne usuwanie nadmiarowych wcięć ignoruje brakujące wcięcia w pierwszej linijce
- Poprawiono buga, kiedy autocomplete pokazywał się w wielolinijkowym kodzie `` `inline` ``.
- Poprawiono wspomaganie klawisza <kbd>Backspace</kbd> przy kasowaniu białych znaków w liście Markdown
- Dodano znacznik `vb` do Visual Basic
- Zmieniono skrót Alt+Up/Alt+Down na Cmd+] oraz Cmd+[ odnośnie wstawiania wcięć na Macu.
- Poprawiono autocomplete wspomnień użytkowników kiedy występują dwa po sobie w linii
- Dodano skrót klawiszowy <kbd>Alt+ArrowRight</kbd> który dodaje wcięcie, tak samo jak <kbd>Tab</kbd>
- Dodano skrót klawiszowy <kbd>Alt+ArrowLeft</kbd> który usuwa wcięcie, tak samo jak <kbd>Shift+Tab</kbd>
- Zaktualizowano parser markdownu, tak że biblioteka działa na przeglądarkach które nie wspierają Ecma2018
- Poprawienie dekoracji wspomnienia użytkownika z cyframi
- Dodanie komendy do zmiany zaznaczenia na notacje klawiszy
- Dodanie skrótu <kbd>Alt+C</kbd> która dodaje fragment kodu, ale nie otwiera podpowiadania oznaczników języka
- Dodanie komendy do dodania wspomnienia użytkownika poniżej cytatu
- Poprawiono, żeby autocomplete oznaczników języków nie pokazywało się we fragmencie kodu
- Dodanie dwukropka po wspomnieniu użytkownika występuje tylko na początku linii
- Poprawiono cytowanie, dodawane są dwie puste linie poniżej cytatu
- Poprawiono skrót <kbd>Ctrl+B</kbd>, tak by edytor nie tracił focusa na Firefoxie
- Poprawienie poprawienie integracji z przeglądarkami, tak że włączają sprawdzanie pisowni
- Usunięto "smart paste". <kbd>Ctrl+V</kbd> działa domyślnie (<kbd>Ctrl+Shift+V</kbd> to jest dawny "smart paste")
- Dodano skrót klawiszowy <kbd>Ctrl+Space</kbd>, który otwiera autocomplete
- Dodano pustą pozycje przy autocomplete języków "Brak oznacznika"
- Kliknięcie dwa razy <kbd>Enter</kbd> w cytatcie kończy cytat
- Dodano `csharp` jako oznacznik języka, na prośbę @obscurity
- Poprawiono działanie komend dot. linków oraz obrazów, kiedy zaznaczenie styka się ze składnią
- Poprawiono wklejanie placeholderów obraków i linków, tak by były dodawane w UrlEncode
- Poprawiono formatowanie kodu, kiedy pisanie we wciętym kodzie zachowuje wcięcie
- Dodatno komendę do wstawiania zapisu z klawiatury `<kbd>`
- Poprawiono budowanie tabelek z niejednakową ilością komórek
- Poprawiono komendę formatowania, kiedy była używa zaraz pod cytatem
- Poprawiono bug z kodem, tabelkami i litsami kiedy zaznaczenie wykraczało poza nową linię
- Poprawiono komendę listy, tak że zaznaczenie whitespace'a również dodaje placeholder
- Poprawiono buga, kiedy dodawnie obrazka lub linka bezpośrednio pod cytatem uszkadzało składnię
- Dodano skrót <kbd>Ctrl+U</kbd> dla podkreślenia
- Dodano skrót <kbd>Ctrl+S</kbd> dla przekreślenia
- Poprawiono dodawanie formatowania, kiedy zaznaczenie kończy się nową linią
- Dodano komendę do dodania tabelki
- Poprawiono żeby quote nie wypierdalał białych znaków
- Dodano komendę do konwertowania zaznaczenia do listy
- Dodano komendę do dodawania listy uporządkowanej
- Dodano komendę do dodawania listy nieuporządkowanej
- Dodano komendę do dodawania fragmentów kodu
- Poprawiono komendę do dodawania fragmentów kodu żeby działala w otoczeniu białych znakow
- Poprawiono wklejanie linków kiedy zawierają spacje
- Poprawionio formatowanie linków, kiedy łamią paragraf
- Poprawionio formatowanie przekreślenia, kiedy łamie paragraf
- Poprawionio formatowanie pochylenia, kiedy łamie paragraf
- Poprawionio formatowanie pogrubienia, kiedy łamie paragraf
- Dodano komendę do dodania linku
- Dodano komendę do dodania obrazka
- Dodano komendę do podkreślania
- Poprawiono formatowanie zaznaczenia jeśli ma białe znaki na początku lub końcu
- Dodano funkcje nadawawania formatowania, nawet jeśli już jest inne formatowanie
- Dodano funkcje do dodawania cytatu na koniec edytora, tak że domyka kod
- Poprawiono formtowanie cytatu, tak żeby działało z linkami
- Dodano możliwość formatowania tekstu w cytacie
- Dodano wklejanie cytatu blokowego
- Dodano dekorację składni Coyote `[[Forum/Delphi]]`
- Użyto `https://thingproxy.freeboard.io/` żeby załadować prawdziwy autocomplete użytkowników z 4programmers.net.
- Usunięto kolorowanie składni bloków kodu, po konsultacji z [@Adam Boduch]
- Wklejanie wielolinijkowego, wciętego kodu wstawia niewcięty kod
- Wklejenie linka ze spacją, np `"http://google.com "`, wkleja go w markdown bez spacji.
- Poprawiono buga ze znikajacym numerem listy, jeśli linia jest pusta, dzieki [@Silv]
- Poprawiono buga z nieodznaczaniem się zaznaczenia na Windows, dzięki [@Silv]
- Dodano formatowania `<sub>` oraz `<sup>`
- Dodano fixa do dekoracji zagnieżdżonych tagów
- Poprawiono Coyote'a żeby Ctrl+Z umiało cofnąć komendy
- Od teraz <kbd>Esc</kbd> emituje event `onCancel`, by móc cancelować treść.
- Od teraz <kbd>Ctrl+Enter</kbd> oraz <kbd>Meta+Enter</kbd> emitują event `onSubmit`, by móc wysłać formularz skrótem klawiszowym.
- Wydzielono cały edytor do JS'a, i dodano adapter Vue
- Poprawiono wklejanie linków i obrazków, jeśli pochodzą z edytora Rich Text
- Poprawiono budowanie linków i obrazków ze znakami specjalnymi
- Poprawiono dodawanie linków przy znaczniku ``
- Poprawiono budowanie linków które zawierają `[`, `]`, `(`, `)`, `\ `
- Zrefaktorować akcje na `StateCommand` z CodeMirror
- Wcześniej, dodany obrazek się nie uploadował, jeśli wklejono go w nielegalne miejsce. Teraz obrazek się uploaduje, ale nie zostaje dodany do widoku.
- Dodano testy jednostkowe dla akcji formatowania pochylenia
- Dodano testy jednostkowe dla akcji formatowania pogrubienia
- Dodano dekorację dla pochyleniem z `<i></i>`
- Dodano dekorację dla pogrubień z `<b></b>`
- Dodano testy jednostkowe dla akcji kontynuacji cytatów
- Przy liście numerowane (`1.`, `2.`) kliknięcie enter, dodaje kolejny element zwiększony o `1`.
- Dodano testy jednostkowe dla akcji kontynuacji list
- Dodano dekorację dla podkreśleń z `<u></u>`
- Poprawiono buga że nie działało wklejanie obrazków z <kbd>Ctrl+Shift+V</kbd>
- Upgrade `@codemirror/language` do `0.19.5`
- Dodano testy jednostkowe dla widoku - wspomnienie użytkowników
- Dodano testy jednostkowe dla widoku - fragmenty kodu
- Dodano testy jednostkowe dla widoku - obrazki
- Dodano testy jednostkowe dla widoku - tabelki
- Dodano testy jednostkowe dla widoku - HTML
- Dodano testy jednostkowe dla widoku - cytaty
- Dodano testy jednostkowe dla widoku - `<kbd>`
- Dodano testy jednostkowe dla widoku - linki
- Dodano testy jednostkowe dla widoku - typografia
- Pooprawiono parsowanie nicków z kropką
- Skrót <kbd>Ctrl+V</kbd> wkleja linki normalnie, jednak <kbd>Ctrl+Shift+V</kbd> (czy po prostu wklejenie czegoś, trzymając shift), konwertuje zaznaczenie na link.
- Poprawiono bug, kiedy klawisz <kbd>Enter</kbd> wcisnięty przy wspomnieniu użytkownika w liście, powiększał listę zamiast zaakceptować użytkownika.
- Usunięto dialekty SQLowe (MySQL, MSSQL, SQLite, Postgres) - przez **[@Panczo]**
- Poprawiono zachowanie edytora kiedy użytkownik ma pusty schowek, a i tak kliknie <kbd>Ctrl+V</kbd>
- "Smart paste" działa również dla RTS (żeby np dało się wklejać linki z Gmail/PhpStorm)
- Dodano kolorowanie składni dla Less i SCSS
- Dodano kolorowanie składni dla SQLite
- Dodano kolorowanie składni dla PowerShell
- Dodano kolorowanie składni dla skryptów powłoki
- Dodano kolorowanie składni dla `Dockerfile`
- Zmiana nazwy edytora z "PostEditor" na "4play"
- Dodano formatowanie klawiszy w `<kbd></kbd>` (maksymalnie 64 znaki)
- Ograniczono formatowanie nicków maksymalnie do 48 znaków
- Dodano formatowanie wspomnień użytkowników.
- Dodano tokenizację wspomnień użytkowników, teraz akcje na treści nie zmalformują tych elementów
- Poprawiono podpowiadanie nicków zawierających znaki `#`, `@` oraz `_`.
- Poprawiono akcje "pogrub", "pochyl", "wkej link" oraz "wklej obrazek", tak by działały również w komórkach tabelki.
- Dodano czcionkę monospace dla tabelek w edytorze
- Przywrócono część Github-Flavoured Markdown (przywrócono ~~strikethrough~~ oraz tabelki; emoji i taski nadal są usunięte).
- Dodano kolorowanie składni dla Pascala
- Dodano kolorowanie składni dla Ruby
- Dodano autcomplete dla języków programowania we fragmentach kodu w markdown
- Dodano handling polskich znaków w nickach
- Dodano placeholder taki sam jak na 4programmers.net
- Dodano renderowanie customowych avatarów w autocomplete
- Dodano wsparcie dla `@user` oraz `@{user}`
- Zmieniono autocomplete na `Promise`, tak żeby można go było podpiąć pod autocomplete z 4programmers.net
- Poprawiono styl autocomplete, tak żeby pasował do theme'u 4programmers.net
- Dodano Ctrl+Shift+Z, jako alternatywa dla Ctrl+Y ("dzięki" **[@Silv]**)
- Usunięto Github Flavoured Markdown oraz Emoji (dzięki **[@Marooned]**)
- Poprawiono działanie <kbd>Ctrl+Z</kbd> (dzięki **[@Silv]**)
- Dodano przełącznik tego, jak Ctrl+V wkleja linki
- Dodano autocomplete
- Dodanie uploadowanie obrazków
- Dodano wklejanie linków i obrazków spod Ctrl+V
- Poprawiono wklejanie przykładowego obrazka
- Poprawiono działanie przekreślenia
- Dodano "jadę na grubo" - dzięki **[@Marooned]**
- Poprawiono działanie pochylenia
- Poprawiono działanie pogrubienia
- Zaktualizowano parsowanie drzewa
- Usunięto zwiększanie zaznaczenia z <kbd>Ctrl+Q</kbd>, lack of interest
- Ostylowano cytat, tak żeby nie miał czcionki monospace i miał tło.
- Dodano kolorowanie składni dla BrainFuck - "dzięki" **[@Marooned]**
- Poprawiono buga kiedy <kbd>Ctrl+Z</kbd> nie cofał zmian - dzięki **[@no_solution_found]**
- Dodano kolorowanie składni Go - dzięki **[@no_solution_found]**
- Dodano kolorowanie składni YAML
- Dodano kolorowanie składni JSON
- Poprawiono buga z niepoprawnym lazy-loadingiem dialektów SQL - dzięki **[@Panczo]**
- Dodano przesuwanie linii w górę i dół <kbd>Alt+Up</kbd> oraz <kbd>Alt+Down</kbd>
- Dodano powiększanie zaznaczenia; jak w IDE od JetBrains (<kbd>Ctrl+W</kbd>, expand selection)
- Dodano lazy-loading języków (tzn. język zostanie załadowany dopiero jak zostanie użyty w treści)
- Dodano jednolity theme dla wszystkich języków (np. keyword zawsze będzie miał taki sam kolor).
- Dodano kolorowanie składni dla wielu języków (extension CodeMirror), głównie żeby **[@furious_programming]** przestał męczyć.
- Poprawiono buga z wykrywaniem blokow kodu podczas wycinania i wklejania.
- Poprawiono buga z zaznaczeniem, które "zostawało" w tyle
- Wciśnięcie Enter będąc w liście, automatycznie dodaje nowy element. Działa dla uporządkowanych i nieuporządkowanych list
- Dodano debugger elementów markdownu (JSON z typami wartości)
- Dodano kolorowanie składni
- Poprawiono wykrywanie fragmentów kodu inline oraz block
- Zmiana koloru zaznaczenia, bardziej pod 4programmers.net
- Dodano instrukcje korzystania z edytora
- Poprawiono wykrywanie kodu zarówno poprzez <b>```</b> jak i `~~~`
- Edycja schematu kolorów, żeby pasowała do 4programmers.net
- Poprawiono błędne wklejanie linku
- Dodatko skróty klawiszowe do funkcji
- Poprawiono błędne wklejanie obrazka

[@Adam Boduch]: https://4programmers.net/Profile/1

[@no_solution_found]: https://4programmers.net/Profile/23850

[@somekind]: https://4programmers.net/Profile/29040

[@Panczo]: https://4programmers.net/Profile/780

[@Marooned]: https://4programmers.net/Profile/652

[@furious_programming]: https://4programmers.net/Profile/49548

[@Silv]: https://4programmers.net/Profile/64311
