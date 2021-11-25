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
            version: <b>1.3.14</b>,
            <a href="../ChangeLog.md" class="underline">/ChangeLog.md</a>,
            last change: 09:53. 25.11.2021
          </p>
          <p>based on <a class="text-blue-700" href="https://codemirror.net/">CodeMirror</a> library.</p>
        </div>
      </div>
      <section class="md:flex text-sm mt-6 md:space-x-12">
        <div class="w-full md:w-1/2 mb-4 bg-white">
          <v-editor ref="md" v-model="value"
                    placeholder="Kliknij, aby dodać treść..."
                    :autocompleteSource="autocompleteSource"
                    :convert="toggled"
                    @image="image"/>
        </div>
        <div class="w-full md:w-1/2">
          <div class="mb-3 leading-6">
            <div class="inline-block mr-5"
                 :title="button.title"
                 @click="command(button.name)"
                 v-for="button in buttons">
              <i :class="button.icon"></i>
            </div>
          </div>
          <div class="mb-6 leading-6 -ml-3">
            <v-toggle-button v-model="toggled"></v-toggle-button>
            Smart paste
            <span v-if="toggled">(<kbd>Ctrl+V</kbd> wkleja zarówno linki i obrazki jako markdown)</span>
            <span v-else>(<kbd>Ctrl+V</kbd> wkleja linki "as-is", jednak obrazki nadal jako markdown)</span>
          </div>
          <div :class="['flex', {'my-6': files.length}]">
            <div v-for="[file, link] in files" style="max-width: 100px;max-height: 80px; margin-right: 10px">
              <img :src="file" alt="uploaded image">
              <span>{{ link }}</span>
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
            <li class="opacity-40">
              <i class="fas fa-quote-left mr-1"/> Zacznij cytat
              <div class="text-xs pl-8">
                <p><b>&gt;</b> Żeby zacząć cytat, wpisz znak większości na początku paragrafu.</p>
                <p><b>&gt;</b> Edytor kontynuuje cytat, więc nie musisz wpisywać dodatkowych znaków większości,</p>
                <p><b>&gt;</b> wystarczy że zaczniesz nową linię.</p>
              </div>
            </li>
            <li class="opacity-40">
              <i class="fas fa-list-ul mr-1"/> Zacznij listę wypunktowaną
              <div class="text-xs pl-8">
                <p><b>-</b> Żeby zacząć listę wypunktowaną, wpisz myślnik na początku paragrafu.</p>
                <p><b>-</b> Edytor kontynuuje listę, więc nie musisz wpisywać dodatkowych myślników,</p>
                <p><b>-</b> wystarczy że zaczniesz nową linię.</p>
              </div>
            </li>
            <li class="opacity-40">
              <i class="fas fa-list-ol mr-1"/> Zacznij listę numerowaną
              <div class="text-xs pl-8">
                <p><b>1.</b> Żeby zacząć listę numerowaną, wpisz <b>1. </b> na początku paragrafu.</p>
                <p><b>2.</b> Edytor kontynuuje listę, więc nie musisz wpisywać dodatkowych cyfr,</p>
                <p><b>3.</b> wystarczy że zaczniesz nową linię.</p>
              </div>
            </li>
            <li class="opacity-40">
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
            <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> - Dodaj wcięcie/usuń wcięcie</li>
            <li><kbd>Alt+Up</kbd>/<kbd>Alt+Down</kbd> - przesuń linię w górę lub w dół</li>
            <li><kbd>Alt+L</kbd> - Zaznacz linię</li>
            <li>
              <kbd>Ctrl+V</kbd> - "smart paste" lub "as-is" paste
              <ul class="text-xs pl-4">
                <li>Jeśli w schowku jest link do obrazka - wkleja obrazek</li>
                <li>Jeśli w schowku jest inny link - wkleja link</li>
                <li>Jeśli w schowku jest obrazek - uploaduje i wkleja obrazek</li>
                <li>Jeśli nie, działa jak standardowe <b>Ctrl+V</b></li>
                <li>Działa również z "Menu kontekstowe">"Wklej"</li>
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
import logo from "../assets/4play.logo.png";
import initialValue from "./initial.md";
import ChangeLog from "../ChangeLog.md";
import styles from "./style.module.scss";

export default {
  data() {
    return {
      logo,
      changeLog: ChangeLog,
      toggled: true,
      styles: styles,
      autocompleteSource: text => Promise
          .resolve([
            {
              name: 'somekind',
              group: 'Moderator',
              photo: 'https://4programmers.net/uploads/photo/TBOr7HZys3Rx6Jxb8wB6q8k0TlnA8iB99gX1OIC2.jpg'
            },
            {name: 'no_solution_found', photo: 'https://4programmers.net/uploads/photo/506ea76720067.jpg'},
            {
              name: 'TomRiddle',
              group: 'Moderator Wiki',
              photo: 'https://4programmers.net/uploads/photo/I2WnOOHo6bWzOyVM1yVm6j0PpFeN4P9L7W1Ggx1N.png'
            },
            {
              name: 'Marooned',
              group: 'Administrator',
              photo: 'https://4programmers.net/uploads/photo/5f/5fc270f12af88.png'
            },
            {name: 'cerrato', group: 'Moderator', photo: 'https://4programmers.net/uploads/photo/5a/5a8ecfd189a33.jpg'},
            {
              name: 'Adam Boduch',
              group: 'Administrator',
              photo: 'https://4programmers.net/uploads/photo/585043b1ae0f6.jpg'
            },
            {name: 'Adam inny gostek'},
            {name: 'AdamX'},
            {name: 's.text'},
            {name: 'Uśpiony wiosenny but', photo: 'https://4programmers.net/uploads/photo/5d/5d9b7971ab871.jpg'},
          ])
          .then(users => users.map(user => ({
            name: user.name,
            badge: user.group,
            avatar: user.photo || 'https://4programmers.net/img/avatar.png',
          }))),
      files: [],
      value: initialValue,
      buttons: [
        {
          title: 'Pogrub zaznaczony tekst lub dodaj pogrubienie',
          icon: 'fas fa-bold',
          name: 'bold'
        },
        {
          title: 'Pochyl zaznaczony tekst lub dodaj pochylenie',
          icon: 'fas fa-italic',
          name: 'italic'
        },
        {
          title: "Dodaj przekreślenie, lub przekreśl zaznaczony tekst",
          name: "strikethrough",
          icon: "fas fa-strikethrough",
        },
        {
          title: 'Dodaj cytat, lub cytuj zaznaczone linie (użyj drugi raz, żeby cofnąć cytowanie)',
          name: 'quote',
          icon: "fas fa-quote-left opacity-40 cursor-default",
        },
        {
          title: "Zmień aktualną linię na listę wypunktowaną",
          icon: "fas fa-list-ul opacity-40 cursor-default",
          name: "bullist",
        },
        {
          title: "Zmień aktualną linię na listę numerowaną",
          icon: "fas fa-list-ol opacity-40 cursor-default",
          name: "numlist",
        },
        {
          title: 'Dodaj nagłówek, lub zmień zaznaczony tekst w nagłówek',
          icon: "fas fa-heading opacity-40 cursor-default",
          name: 'heading'
        },
        {
          title: 'Dodaj fragment kodu, lub zmień zaznaczony tekst we fragment kodu',
          icon: "fas fa-code opacity-40 cursor-default",
          name: 'code',
        },
        {
          title: 'Dodaj link',
          icon: "fas fa-link opacity-40 cursor-default",
          name: 'link'
        }
      ]
    };
  },
  methods: {
    image(file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newId = this.files.length + 1;
        const newName = `screenshot${newId}.png`;
        this.$refs.md.insertImage(newName, 'image alt');
        this.files.push([reader.result, newName]);
      };
      reader.readAsDataURL(file);
    },
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
      if (command === 'strikethrough') {
        editor.makeStrikeThrough();
      }
    }
  },
};
</script>
