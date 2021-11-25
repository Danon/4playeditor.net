### Aktualna wersja

Wersja **1.3.14**

### ChangeLog

- Od teraz <kbd>Esc</kbd> emituje event `onCancel`, by móc cancelować treść.
- Od teraz <kbd>Ctrl+Enter</kbd> oraz <kbd>Meta+Enter</kbd> emitują event `onSubmit`, by móc wysłać formularz skrótem
  klawiszowym.
- Wydzielono cały edytor do JS'a, i dodano adapter Vue
- Poprawiono wklejanie linków i obrazków, jeśli pochodzą z edytora Rich Text
- Poprawiono budowanie linków i obrazków ze znakami specjalnymi
- Poprawiono dodawanie linków przy znaczniku ``
- Poprawiono budowanie linków które zawierają `[`, `]`, `(`, `)`, `\ `
- Zrefaktorować akcje na `StateCommand` z CodeMirror
- Wcześniej, dodany obrazek się nie uploadował, jeśli wklejono go w nielegalne miejsce. Teraz obrazek się uploaduje, ale
  nie zostaje dodany do widoku.
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
- Skrót <kbd>Ctrl+V</kbd> wkleja linki normalnie, jednak <kbd>Ctrl+Shift+V</kbd> (czy po prostu wklejenie czegoś,
  trzymając shift), konwertuje zaznaczenie na link.
- Poprawiono bug, kiedy klawisz <kbd>Enter</kbd> wcisnięty przy wspomnieniu użytkownika w liście, powiększał listę
  zamiast zaakceptować użytkownika.
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
- Przywrócono część Github-Flavoured Markdown (przywrócono ~~strikethrough~~ oraz tabelki; emoji i taski nadal są
  usunięte).
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
- Dodano kolorowanie składni dla wielu języków (extension CodeMirror), głównie żeby **[@furious_programming]** przestał
  męczyć.
- Poprawiono buga z wykrywaniem blokow kodu podczas wycinania i wklejania.
- Poprawiono buga z zaznaczeniem, które "zostawało" w tyle
- Wciśnięcie Enter będąc w liście, automatycznie dodaje nowy element. Działa dla uporządkowanych i nieuporządkowanych
  list
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

[@no_solution_found]: https://4programmers.net/Profile/23850

[@somekind]: https://4programmers.net/Profile/29040

[@Panczo]: https://4programmers.net/Profile/780

[@Marooned]: https://4programmers.net/Profile/652

[@furious_programming]: https://4programmers.net/Profile/49548

[@Silv]: https://4programmers.net/Profile/64311
