import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { fa } from 'vuetify/locale'
const vuetify = createVuetify({
  components,
  directives,
  rtl: true,
  locale: {
    locale: 'fa',
    messages: { fa },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          maincolor:'#14179E',
          white: '#FFFFFF',
          brick:'#DEB888',
          black:'#000000',
          grey:'#585858',
          grey1:'#E9EDF1',
          grey2:'#C5C9CD',
        },
      },
      dark: {
        colors: {
        
        },
      },
    },
  },
});

export default vuetify;