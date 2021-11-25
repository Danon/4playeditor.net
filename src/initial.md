## Welcome

Witaj w demo nowego edytora!

To krotkie demo prezentujące możliwości nowego edytora, który prawdopodobnie wkrótce będzie 
używany na [4programmers.net](https://4programmers.net).

Edytor prezentuje nowatorski WYSWIG - dodaje formatowanie do markdownu, ale nigdy nie ukrywa 
żadnych znaków, więc zawsze widzisz co wpisałeś.

### Typografia

Edytor wspiera markdownowe **pogrubienie** tekstu, markdownowe *pochylenie* tekstu, oraz 
markdownowe ~~przekreślenie~~ tekstu (a'la Github-Flavoured Markdown). W Markdown, używanie
znaku `_` podklreśnika jest równoważne z `*`, więc to jest __pogrubienie__, a to _pochylenie_.

Wspierane jest również zagnieżdżenie *różnych **stylów ~~w ramach~~ jednego** napisu*.

By podkreślić tekst w 4programmers.net, użyj HTML: <u>podkreślenie</u>. Wspierane jest również
<b>pogrubienie</b> oraz <i>pochylenie</i> znacznikami HTML.

Edytor dekoruje również `inline code`, czyli krótkie kawałki tekstu, które mają reprezentować 
elementy języka programowania, np. "Dodaj `console.log(user)`".

Przykłady:

- Jeśli chcesz dodać `null` do zmiennej typu `array` PHP, możesz użyć `$array[] = null`
- Backticki w inline-code: ``Example inline `block`!``

#### Listy zachowujące oraz nie zachowujące kolejności

Edytor dodaje wsparcie dla list (również zanany jako wypunktowane i numerowane listy). Ustaw kursor 
przy dowolnym elemencie i wciśnij <kbd>Enter</kbd>:

1. Pierwszy element
2. Drugi element
3. Ustaw kursor na linii i kliknij enter:
4. Ostatni element

- Element listy
- Element listy
- Ustaw kursor tutaj i kliknij enter:

### Cytat

Kolorowanie cytatów z szarym tłem.

> > ##### [Silv napisał(a)](/Forum/1794731):
> Dla równowagi opinii – ja nie widzę większej różnicy póki co. Tak samo chętnie zobaczę propozycję @TomRiddle.

### Tabelki

Edytor dekoruje tabelki - wiersze, komórki oraz nagłówki. Dodaje również czcionkę `monospace`, 
co pozwoli lepiej dostrzec jej kształt.

| Scientist       | Nationality |
| --------------- | ----------- |
| Albert Einstein | German      |

Tableki również respektują style wewnątrz komórek, także z **pogrubieniem**, *pochyleniem*,
`inline-code` oraz wszystkimi innymi *inline* elementami, takimi jak linki.

| Algorithm       | Description            |
| --------------- | ---------------------- |
| **Quick** sort  | złożoność `O(n log n)` |
| Bubble *sort*   | złożoność `O(n^2)`     |

Tabelki jednak nie respektują blokowych elementów, więc nie można osadzić blokowego fragmentu kodu 
w tabelce. Obrazki nie są elementami blokowymi, więc można je umieszczać w tabelce.

### Przykłady kodu

W edytorze, możesz osadzić fragmenty kodu.

Przykładowy kod Python:
```py
if __name__ == '__main__':
    print("Hello, world!")
```

Przykładowy skrypt powłoki:
```sh
#!/bin/bash
var="Hello World"
printf "%s\n" "$var"
```

Przykładowy kod Brainfuck:
```brainfuck
++++++++[>++++     
```

Przykładowy Dockerfile:

```Dockerfile
FROM ubuntu:18.04
COPY ../demo /app
CMD python /app/app.py
```

Przykładowe style
```scss
$font-stack: Helvetica, sans-serif;

body {
  font: 100% $font-stack;
}
```

#### Auto-uzupełnienie taga kodu

Ustaw kursor za `js` i wciśnij <kbd>Backspace</kbd>, zobaczysz autocomplete, pomagający wybrać 
odpowiedni tag dla odpowiedniego języka programowania.

```js
{
  "key": "value"
}

console.log("welcome");
```

Używając autocomplete, zmień `js` na `json` w przykładzie wyżej.

### Klawisze z klawiatury

Edytor formatuje tag `<kbd></kbd>` jako kombinację klawiszy. Dekoracja `<kbd></kbd>` jest dodawana 
kiedy wyrażony klawisz ma konkretną postać:

- Otwórz wirtualny pulpit <kbd>Ctrl+Win+Tab</kbd>
- Przewiń stronę w Chrome <kbd>PageDown</kbd>
- Wyszukaj plik na Macu <kbd>Command+F6</kbd>
- Zmień nazwę w Visual Studio <kbd>Ctrl+K,Ctrl+R</kbd> lub <kbd>Shift+F6</kbd>
- Wprowadź polecenie w Vim <kbd>:</kbd>, potem wyjdź <kbd>Esc</kbd>, `":wq!"`, <kbd>Enter</kbd>
- Do powiększenia obrazu użyj skrótu <kbd>Ctrl+Plus</kbd> lub <kbd>Ctrl+Minus</kbd>
- Skrót na Macu to <kbd>Ctrl+Comma</kbd>

Niepoprawne klawisze zostaną zinterpretowane jak zwykły kod HTML. Znaki diaryktyczne, białe znaki 
oprócz spacji oraz blokowe elementy nie są formatowane.

- <kbd>Ctrl++</kbd> dwa separatory
- <kbd>Ctrl+Ł</kbd> znak diaryktyczny
- <kbd>foo</kbd> nieznany klawisz
- <kbd >Shift</ kbd > inny format taga
- <kbd><kbd>Shift</kbd></kbd> - zewnętrzne tagi są nie są dekorowane

W ten sposób można tworzyć klikalne przyciski, łącząc `[link]` oraz `<kbd>klawisz</kbd>`

- Kliknij w [<kbd>Enter</kbd>](http://4programmers.net)

### Wspomnienia innych użytkowników

Edytor wspiera auto-uzupełnienie wspomnień innych użytkowników, do tego celu wstaw znak `@` oraz
zacznij pisać nick użytkownika. Wspierane są również nazwy użytkowników ze spacjami i kropkami.

@someki
@Ad
@{To
@{s.text}

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
