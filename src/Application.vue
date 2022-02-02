<template>
  <div style="background-color:rgb(209, 213, 206)">
    <div class="w-lg container mx-auto">
      <div class="flex pt-6">
        <div class="mt-1 mr-8">
          <img :src="logo" alt="4programmers.net">
        </div>
        <div>
          <p>
            Editor "4play" made by
            <a href="https://4programmers.net/Profile/43956" class="text-blue-700">TomRiddle</a>
            for usage in 4programmers.net
          </p>
          <p>
            version: <b>1.9.7</b>,
            <a href="./ChangeLog.md" class="underline">/ChangeLog.md</a>,
            last change: 18:40. 02.02.2022
          </p>
          <p>based on <a class="text-blue-700" href="https://codemirror.net/">CodeMirror</a> library.</p>
        </div>
      </div>
      <section class="md:flex text-sm mt-6 md:space-x-12">
        <div class="w-full md:w-1/2 mb-4 bg-white">
          <v-editor ref="md" v-model="value"
                    placeholder="Kliknij, aby dodać treść..."
                    :autocompleteSource="autocompleteSource"
                    @state="state"/>
        </div>
        <div class="w-full md:w-1/2">
          <div class="mb-3 leading-6">
            <div class="inline-block mr-5"
                 :title="button.title"
                 @click="command(button.name)"
                 v-for="button in buttons">
              <i :class="['transition-opacity', button.icon, button.can ? 'cursor-pointer' : 'opacity-40 cursor-default']"></i>
            </div>
          </div>
          <ul class="pl-3 space-y-4">
            <li>
              <i class="fas fa-bold mr-1"/> {{ c('Zacznij pogrubienie...', 'Pogrub') }} <i>(<kbd>Ctrl+B</kbd>, <b>b</b>old)</i>
              <p class="text-xs pl-8">
                Pogrubia zaznaczony tekst, lub wstawia znacznik pogrubienia,
                jeśli nie ma zaznaczenia.
              </p>
              <p class="text-xs pl-8">
                Pogrubienie nie edytuje kodu, jeśli: zaznaczenie przekracza granicę markup,
                zaznaczenie jest we fragmencie kodu, cytacie, nagłówku lub linku.
              </p>
              <p class="text-xs pl-8">
                Jeśli nie ma zaznaczenia, wstawiany jest znacznik <code>**bold**</code>
              </p>
            </li>
            <li>
              <i class="fas fa-italic mr-1"/> {{ c('Zacznij pochylenie...', 'Pochyl') }} <i>(<kbd>Ctrl+I</kbd>, <b>i</b>talics)</i>
              <p class="text-xs pl-8">
                Pochyla zaznaczony tekst, lub wstawia znacznik pochylenia,
                jeśli nie ma zaznaczenia.</p>
              <p class="text-xs pl-8">
                Pochylenie nie edytuje kodu, jeśli: zaznaczenie przekracza granicę markup,
                zaznaczenie jest we fragmencie kodu, cytacie, nagłówku lub linku.
              </p>
              <p class="text-xs pl-8">
                Jeśli nie ma zaznaczenia, wstawiany jest znacznik <code>*italics*</code>
              </p>
            </li>
            <li>
              <i class="fas fa-strikethrough mr-1"/> {{ c('Zacznij przekreślenie...', 'Przekreśl') }}
              <i>(<kbd>Ctrl+S</kbd>, <b>s</b>trike)</i>
              <p class="text-xs pl-8">
                Przekreśla zaznaczony tekst, lub wstawia znacznik przekreślenia,
                jeśli nie ma zaznaczenia.</p>
              <p class="text-xs pl-8">
                <b>Uwaga!</b> W Markdown ~~ to jest przekreślenie,
                ale ~~~ to jest alternatywna składnia na fragmentu kodu.
              </p>
              <p class="text-xs pl-8">
                Przkreślenie nie edytuje kodu, jeśli: zaznaczenie przekracza granicę markup,
                zaznaczenie jest we fragmencie kodu, cytacie, nagłówku lub linku.
              </p>
            </li>
            <li>
              <i class="fas fa-quote-left mr-1"/> Zacznij cytat
              <div class="text-xs pl-8">
                <p><b>&gt;</b> Żeby zacząć cytat, wpisz znak większości na początku paragrafu.</p>
                <p><b>&gt;</b> Edytor kontynuuje cytat, więc nie musisz wpisywać dodatkowych znaków większości,</p>
                <p><b>&gt;</b> wystarczy że zaczniesz nową linię.</p>
              </div>
            </li>
            <li>
              <i class="fas fa-list-ul mr-1"/> Zacznij listę wypunktowaną
              <div class="text-xs pl-8">
                <p><b>-</b> Żeby zacząć listę wypunktowaną, wpisz myślnik na początku paragrafu.</p>
                <p><b>-</b> Edytor kontynuuje listę, więc nie musisz wpisywać dodatkowych myślników,</p>
                <p><b>-</b> wystarczy że zaczniesz nową linię.</p>
              </div>
            </li>
            <li>
              <i class="fas fa-list-ol mr-1"/> Zacznij listę numerowaną
              <div class="text-xs pl-8">
                <p><b>1.</b> Żeby zacząć listę numerowaną, wpisz <b>1. </b> na początku paragrafu.</p>
                <p><b>2.</b> Edytor kontynuuje listę, więc nie musisz wpisywać dodatkowych cyfr,</p>
                <p><b>3.</b> wystarczy że zaczniesz nową linię.</p>
              </div>
            </li>
            <li>
              <i class="fas fa-code mr-1"/> Dodaj kod
              <div class="text-xs pl-8">
                <p><b>```java</b></p>
                <p>Dodaj znacznik fragmentu kodu, składającego się z trzech backticków,</p>
                <p>lub trzech tyld: ~~~; a następnie wpisz tag języka programowania.</p>
                <p><b>```</b></p>
              </div>
            </li>
          </ul>
          <h2 class="text-lg mt-6">Skróty</h2>
          <ul class="mt-4 pl-2 space-y-3">
            <li><kbd>Ctrl+B</kbd> - dodanie <b>pogrubienia</b> lub <b>pogrubienie</b> zaznaczenia</li>
            <li><kbd>Ctrl+I</kbd> - dodanie <i>pochylenia</i> lub <i>pochylenie</i> zaznaczenia</li>
            <li><kbd>Ctrl+U</kbd> - dodanie <u>podkreślenie</u> lub <u>podkreślenie</u> zaznaczenia</li>
            <li><kbd>Ctrl+S</kbd> - dodanie
              <del>przekreślenia</del>
              lub
              <del>przekreślenie</del>
              zaznaczenia
            </li>
            <li>
              <kbd>Alt+K</kbd> - dodaje notację klawisza
            </li>
            <li>
              <kbd>Ctrl+Space</kbd> - otwiera autocomplete wyboru języka
            </li>
            <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> - Dodaj wcięcie/usuń wcięcie</li>
            <li><kbd>Alt+Up</kbd>/<kbd>Alt+Down</kbd> - przesuń linię w górę lub w dół</li>
            <li><kbd>Alt+L</kbd> - <span class="bg-blue-400 text-white">Zaznacz linię</span></li>
            <li>
              <kbd>Ctrl+V</kbd> -
              <ul class="text-xs pl-4">
                <li>Jeśli w schowku jest link do obrazka - wkleja obrazek</li>
                <li>Jeśli w schowku jest inny link - wkleja link dosłownie</li>
                <li>Jeśli w schowku jest obrazek - uploaduje i wkleja obrazek</li>
                <li>Jeśli nie, działa jak standardowe <b>Ctrl+V</b></li>
                <li>Działa również z "Menu kontekstowe">"Wklej"</li>
              </ul>
            </li>
            <li>
              <kbd>Ctrl+Shift+V</kbd> -
              <ul class="text-xs pl-4">
                <li>Jeśli w schowku jest link - wkleja link jako markdown</li>
                <li>Jeśli w schowku jest inny link - wkleja link dosłownie</li>
              </ul>
            </li>
          </ul>
          <div class="w-full changeLog">
            <div v-html="changeLog" :class="styles.changeLog"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import logo from "./assets/resource/4play.logo.png";
import initialValue from "./assets/source/initial.md";
import changeLog from "../ChangeLog.md";
import * as styles from "./style.module.scss";

export default {
  data() {
    return {
      logo,
      changeLog,
      styles,
      autocompleteSource: function (text) {
        return fetch('https://thingproxy.freeboard.io/fetch/https://4programmers.net/completion/prompt/users?q=' + encodeURI(text))
            .then(response => response.json())
            .then(users => users.map(user => ({
              name: user.name,
              badge: user.group,
              avatar: user.photo || 'https://4programmers.net/img/avatar.png',
            })));
      },
      value: initialValue,
      buttons: [
        {
          title: 'Pogrub zaznaczony tekst lub dodaj pogrubienie',
          icon: 'fas fa-bold',
          name: 'bold',
          can: null,
        },
        {
          title: 'Pochyl zaznaczony tekst lub dodaj pochylenie',
          icon: 'fas fa-italic',
          name: 'italic',
          can: null,
        },
        {
          title: "Dodaj podkreślenie, lub podkreśl zaznaczony tekst",
          name: "underline",
          icon: "fas fa-underline",
          can: null,
        },
        {
          title: "Dodaj przekreślenie, lub przekreśl zaznaczony tekst",
          name: "strikethrough",
          icon: "fas fa-strikethrough",
          can: null,
        },
        {
          title: 'Dodaj link',
          icon: "fas fa-link",
          name: 'link',
          can: null,
        },
        {
          title: 'Dodaj obraz',
          icon: "fas fa-image",
          name: 'image',
          can: null,
        },
        {
          title: 'Dodaj cytat',
          name: 'quote',
          icon: "fas fa-quote-left",
          can: null,
        },
        {
          title: "Zmień aktualną linię na listę wypunktowaną",
          icon: "fas fa-list-ul",
          name: "bulletList",
          can: null,
        },
        {
          title: "Zmień aktualną linię na listę numerowaną",
          icon: "fas fa-list-ol",
          name: "numericList",
          can: null,
        },
        {
          title: 'Dodaj fragment kodu, lub zmień zaznaczony tekst we fragment kodu',
          icon: "fas fa-code",
          name: 'code',
          can: null,
        },
        {
          title: 'Dodaj tabelkę kodu, lub zmień zaznaczony tekst w tabelkę',
          icon: "fas fa-table",
          name: 'table',
          can: null,
        },
      ]
    };
  },
  methods: {
    c(add, convert) {
      return add;
    },
    command(command) {
      let editor = this.$refs.md;
      if (command === 'bold') {
        editor.makeBold();
      }
      if (command === 'italic') {
        editor.makeItalics();
      }
      if (command === 'underline') {
        editor.makeUnderline();
      }
      if (command === 'strikethrough') {
        editor.makeStrikeThrough();
      }
      if (command === 'quote') {
        editor.insertBlockQuote("Dodaj cytat...");
      }
      if (command === 'link') {
        editor.makeLink("http://");
      }
      if (command === 'image') {
        editor.makeImage("http://");
      }
      if (command === 'code') {
        editor.insertCodeBlock();
      }
      if (command === 'bulletList') {
        editor.addUnorderedList('Lista nieuporządkowana...');
      }
      if (command === 'numericList') {
        editor.addOrderedList('Lista uporządkowana...');
      }
      if (command === 'table') {
        editor.addTable('Nagłówek', 'Dodaj...');
      }
    },
    state(state) {
      this.buttons.find(b => b.name === 'bold').can = state.canBold;
      this.buttons.find(b => b.name === 'italic').can = state.canItalics;
      this.buttons.find(b => b.name === 'strikethrough').can = state.canStrikeThrough;
      this.buttons.find(b => b.name === 'underline').can = state.canUnderline;
      this.buttons.find(b => b.name === 'bulletList').can = state.canList;
      this.buttons.find(b => b.name === 'numericList').can = state.canList;
      this.buttons.find(b => b.name === 'quote').can = state.canBlockQuote;
      this.buttons.find(b => b.name === 'link').can = state.canLink;
      this.buttons.find(b => b.name === 'image').can = state.canImage;
      this.buttons.find(b => b.name === 'code').can = state.canCode;
      this.buttons.find(b => b.name === 'table').can = state.canTable;
    }
  },
};
</script>
