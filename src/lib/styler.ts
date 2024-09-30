import { onMounted } from 'vue'
import { makeTenoxUI } from '@tenoxui/core'
import { property } from '@tenoxui/property'

const config = {
  property: {
    ...property,
    ...{
      'bdr-left': 'borderLeft',
      'place-items': 'placeItems'
    }
  },
  values: {
    primary: '#ccf654'
  },
  breakpoints: [
    { name: 'max-lg', max: 1024 },
    { name: 'lg', min: 1024 }
  ]
}

export function applyStyles(styledElement: { [selector: string]: string }) {
  Object.entries(styledElement).forEach(([selector, styles]) => {
    document.querySelectorAll(selector).forEach((element) => {
      new makeTenoxUI({ ...config, element: element as HTMLElement }).applyMultiStyles(styles)
    })
  })
}

export function styler() {
  document.querySelectorAll('*[class]').forEach((element) => {
    new makeTenoxUI({ element: element as HTMLElement, ...config }).useDOM()
  })
}

export function createStyler() {
  onMounted(() => {
    styler()

    document.body.style.fontFamily = 'var(--family)'
  })
}
