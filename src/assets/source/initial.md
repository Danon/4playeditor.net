## Welcome

Witaj w demo nowego edytora!

To krótkie demo prezentujące możliwości nowego edytora, który prawdopodobnie wkrótce będzie używany na [4programmers.net](https://4programmers.net).

Edytor prezentuje nowatorski WYSWIG - dodaje formatowanie do markdownu, ale nigdy nie ukrywa żadnych znaków, więc zawsze widzisz, co wpisałeś.

### Typografia

Edytor wspiera markdownowe **pogrubienie** tekstu, markdownowe *pochylenie* tekstu, oraz markdownowe ~~przekreślenie~~ tekstu (a'la Github-Flavoured Markdown). W Markdown, używanie znaku `_` podkreślnika jest równoważne z `*`, więc to jest __pogrubienie__, a to _pochylenie_.

Wspierane jest również zagnieżdżenie *różnych **stylów ~~w ramach~~ jednego** napisu*.

By podkreślić tekst w 4programmers.net, użyj HTML: <u>podkreślenie</u>. Wspierane jest również <b>pogrubienie</b> oraz <i>pochylenie</i> znacznikami HTML.

Edytor dekoruje również `inline code`, czyli krótkie kawałki tekstu, które mają reprezentować elementy języka programowania, np. "Dodaj `console.log(user)`". By umieścić znak "back-tick", użyj zapisu ``Zagnieżdżone użycie ` backticka ``.

#### Listy zachowujące oraz nie zachowujące kolejności

Edytor dodaje wsparcie dla list (również zanany jako wypunktowane i numerowane listy). Ustaw kursor przy dowolnym elemencie i wciśnij <kbd>Enter</kbd>:

1. Pierwszy element
2. Ustaw kursor na linii i kliknij enter:
3. Ostatni element

Mając kursor na elemencie listy, wciśnij <kbd>Tab</kbd>, by wciąć element listy.

#### Podtekst oraz supertekst

By dodać podtekst lub supertekst użyj tagów `<sub>` oraz `<sup>`:

- Podtekst: Wzór chemiczny wody to H<sub>2</sub>O
- Supertekst: e<sup> π i</sup> = -1

### Cytat

> > ##### [Silv napisał(a)](/Forum/1794731):
> Dla równowagi opinii – ja nie widzę większej różnicy póki co. Tak samo chętnie zobaczę propozycję @TomRiddle.

### Podgląd obrazów

Dodanie obrazu markdown, korzystając ze składni ![image](https://4programmers.net/img/logo-mobile.png) pokaże podgląd obrazu poniżej paragrafu.

Obrazy nie są elementem edytora, są jedynie dekoracją. Nie wchodzą w interakcę z myszą lub klawiaturą, nie stanowią też osobnej linii.

### Tabelki

Edytor dekoruje tabelki - wiersze, komórki oraz nagłówki. Dodaje również czcionkę `monospace`, co pozwoli lepiej dostrzec jej kształt.

| Scientist       | Nationality |
| --------------- | ----------- |
| Albert Einstein | German      |

Tableki również respektują style wewnątrz komórek, także z **pogrubieniem**, *pochyleniem*, `inline-code` oraz wszystkimi innymi *inline* elementami, takimi jak linki.

| Algorithm       | Description            |
| --------------- | ---------------------- |
| **Quick** sort  | złożoność `O(n log n)` |
| Bubble *sort*   | złożoność `O(n^2)`     |

Tabelki jednak nie respektują blokowych elementów, więc nie można osadzić blokowego fragmentu kodu w tabelce. Obrazki nie są elementami blokowymi, więc można je umieszczać w tabelce.

### Przykłady kodu

W edytorze możesz osadzić fragmenty kodu.

Przykładowy skrypt powłoki:
```sh
#!/bin/bash
var="Hello World"
printf "%s\n" "$var"
```

Przykładowy Dockerfile:

```Dockerfile
FROM ubuntu:18.04
COPY ../demo /app
CMD python /app/app.py
```

#### Auto-uzupełnienie taga kodu

Ustaw kursor za `js` i wciśnij <kbd>Backspace</kbd>, zobaczysz autocomplete, pomagający wybrać odpowiedni tag dla odpowiedniego języka programowania.

```js
console.log("welcome");
```

Używając autocomplete, zmień `js` na `json` w przykładzie wyżej.

### Klawisze z klawiatury

Edytor formatuje tag `<kbd></kbd>` jako kombinację klawiszy. Dekoracja `<kbd></kbd>` jest dodawana, kiedy wyrażony klawisz ma konkretną postać:

W ramach jednego skrótu oddziel klawisze plusem. Różne skróty oddziel od siebie przecinkiem. By dodać klawisz `+`, `,`lub `-` - użyj `Plus`, `Comma` lub `Minus`.

- Przewiń stronę w Chrome <kbd>PageDown</kbd>
- Wyszukaj plik na Macu <kbd>Command+F6</kbd>
- Zmień nazwę w Visual Studio <kbd>Ctrl+K,Ctrl+R</kbd> lub <kbd>Shift+PageDown+F6</kbd>
- Wprowadź polecenie w Vim <kbd>:</kbd>, potem wyjdź <kbd>Esc</kbd>, `":wq!"`, <kbd>Enter</kbd>
- Do powiększenia obrazu użyj skrótu <kbd>Ctrl+Plus</kbd> lub <kbd>Ctrl+Minus</kbd>
- Skrót na Macu to <kbd>Ctrl+Comma</kbd>

Niepoprawne klawisze zostaną zinterpretowane jak zwykły kod HTML. Znaki diaryktyczne, białe znaki oraz blokowe elementy nie są formatowane.

- <kbd>Ctrl++</kbd> dwa separatory
- <kbd>Ctrl+Ł</kbd> litery ze znakiem diakrytycznym
- <kbd>foo</kbd> nieznany klawisz
- <kbd >Shift</ kbd > inny format tagu
- <kbd><kbd>Shift</kbd></kbd> - zewnętrzne tagi są nie są dekorowane

Można tworzyć klikalne przyciski, łącząc `[link]` oraz `<kbd>klawisz</kbd>`

- Kliknij w [<kbd>Enter</kbd>](http://4programmers.net)

### Wspomnienia innych użytkowników

Edytor wspiera auto-uzupełnienie wspomnień użytkowników, do tego celu wstaw znak `@` oraz zacznij pisać nick użytkownika. Wspierane są również nazwy użytkowników zawierające spacje i kropki.

@someki @Ad @{To @{s.text}

### Specjalne linki Coyote

Serwis 4programmers.net udostępnia krótką składnie dla zasobów wewnętrz strony, np. do forum lub kompendium. Takie linki nie są zgodne z Markdown i mają inną składnie, ale stanowią pewne ułatwienie wewnątrz samej strony.

- Link do kompendium: [[Python]]
- Link do forum: [[Forum/Delphi]]

### Wstawki HTML

Edytor dekoruje również komentarze HTML.

<!-- komentarz HTML -->

Kolorowane są też encje HTML:

&nbsp; &gt;

Kolorowane są też wszystkie tagi HTML, ponieważ HTML to poprawny Markdown:

<div>
    <p>Paragraph</p>
</div>

Niektóre tagi HTML mają również dodatkowe dekoracje

<b>pogrubienie</b>, <i>pochylenie</i> oraz <u>podklreślenie</u>.
