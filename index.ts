import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'

import * as shape from '../tds-shapes/tds-shapes-entry'
import { G } from '@svgdotjs/svg.js'

import {
  Create_ID,
  getRandomColor,
  iconPath,
  isPointInCircle,
  ListAttrDefault,
  ListAttrGroupDefault,
  TitleStyle,
} from '../tds-shapes/src/common'
import {
  extendsHeaderDefStyle,
  extendsTittleDefStyle,
  // extendsTittleDefStyle,
  ListItemAttr,
  mitem,
  textarea,
  textareaDefStyle,
} from '../tds-shapes/tds-shapes-entry'
import {
  Behavior,
  ItemPartsBehavior,
} from '../tds-shapes/src/listItem'
import { textbox } from '../tds-shapes/src/textbox'

const startMS = performance.now()

var draw = SVG().size(1300, 1300).addTo('body')

//#region  DATA

/**
 * creating a label attributes
 * @param s text on label
 * @param p position
 * @returns LabelAttr instance
 */
const la = (
  s: string | number,
  p: { x: number; y: number } = { x: 0, y: 0 }
): shape.LabelAttr => {
  return {
    title: {
      value: typeof s == 'number' ? s.toString() : s,
      font: 'Menlo',
      fontWeight: 'normal',
      size: 12,
      fill: { color: 'black' },
      position: { x: 0, y: 0 },
    },
    background: {
      width: 5,
      height: 5,
      fill: { color: '#EEEEEE' },
      stroke: { color: '#D2D2D2', width: 1 },
      radius: 5,
      position: { x: 0, y: 0 },
    },
    backgroundRule: ['indent'],
    indents: [5, 3, 5, 3],
    position: { x: p.x, y: p.y },
  }
}

/**
 * creating a label with the specified properties
 * @param s text on label
 * @param p position
 * @returns label instance
 */
const lm = (s: string | number, p: { x: number; y: number }) => {
  return new shape.label(la(s, p)).draggable()
}

draw.add(lm('whĄt a beautiful day', { x: 40, y: 50 }))
draw.add(lm('wĤat a beautiful tree st͜ump', { x: 40, y: 70 }))
draw.add(lm('How beAutiful I Äm', { x: 40, y: 90 }))
draw.add(lm('and my s̬ong', { x: 40, y: 110 }))

draw.add(lm(21111977, { x: 40, y: 150 }))
draw.add(lm(27111981, { x: 40, y: 170 }))
draw.add(lm('08112006', { x: 40, y: 190 }))

/** text boxes */
let tb1 = new shape.textbox({
  label: la('hello', { x: 190, y: 120 }),
  inputType: 'text',
}).draggable()
draw.add(tb1)

let tb2 = new shape.textbox({
  label: la('1984', { x: 190, y: 140 }),
  inputType: 'number',
}).draggable()
draw.add(tb2)

let tb3 = new shape.textbox({
  label: la('1984 long data element', { x: 190, y: 160 }),
  inputType: 'text',
}).draggable()
draw.add(tb3)

/** slider demo item */
let slidersGroup = new G().addClass('draggable')
let sliderDemo = shape.slider.demo(draw)

slidersGroup
  .rect(400, 400)
  .radius(20)
  .fill({ color: '#EEEEEE' })
  .stroke({ color: '#D2D2D2', width: 1 })

let hs = sliderDemo.horizontal.draggable(false)
slidersGroup
  .move(90, 90)
  .draggable()
  .add(hs.move(200, 130))
  .add(sliderDemo.vertical[0].move(180, 176))
  .add(sliderDemo.vertical[1].move(120, 176))
  .add(sliderDemo.htwostate.move(280, 220))
  .add(sliderDemo.tickHor.move(280, 270))
  .add(sliderDemo.nonCirclePin.move(200, 400))

sliderDemo.htwostate.draggable(false)
sliderDemo.htwostate.on(
  'tds-slider-valueChanged',
  (ev: CustomEvent) => {
    console.log(ev.detail.payload.value)
  }
)

draw.add(slidersGroup)

slidersGroup.move(100, 250)

// list
let ls = new shape.list(ListAttrDefault).draggable()
let b: ItemPartsBehavior = [
  {
    itemPart: 'icon',
    behavior: [
      {
        condition: 'normal',
        attr: {
          fill: { color: 'transparent' },
          stroke: { color: 'red', width: 0.5 },
        },
      },
      {
        condition: 'onclick',
        attr: { fill: { color: 'red' }, stroke: { color: 'red' } },
      },
    ],
  },
]
let fi = ls.items[4]
fi.behavior = b
fi.applyBehavior()

draw.add(ls)
ls.move(350, 50)

// combobox
let cbt: TitleStyle = {
  value: 'Your choice:',
  font: 'Menlo',
  fontWeight: 'normal',
  size: 12,
  fill: { color: 'black' },
  position: { x: -90, y: 10 },
}
let cb = new shape.combobox({
  listAttr: ListAttrGroupDefault,
  selection: 3,
  title: cbt,
}) // .draggable()
draw.add(cb)
cb.move(650, 50)

let lia: ListItemAttr = {
  label: {
    title: {
      value: 'I`am grouped item',
      fontWeight: 'normal',
      font: 'Menlo',
      size: 12,
      fill: { color: 'black' },
      position: { x: 0, y: 0 },
    },
    background: {
      width: 10,
      height: 10,
      fill: { color: '#EEEEEE' },
      stroke: { color: '#EEEEEE' },
      radius: 5,
      position: { x: 0, y: 0 },
    },
    indents: [8, 2, 8, 2],
    position: { x: 0, y: 0 },
    backgroundRule: ['indent'],
  },
  kind: 'icon',
  width: 220,
  suppIndent: 15,
  icon: {
    d: iconPath.rightChevron,
    fill: { color: 'black' },
    stroke: { color: 'black' },
  },
}

let gi = new shape.listItemGrouped(
  lia,
  ListAttrGroupDefault
).draggable()
gi.move(650, 100)
draw.add(gi)

//#endregion

let mit = shape
  .mitemCreator('Reach by hand', { x: 700, y: 230 })
  .draggable()

draw.add(mit)

draw.add(
  shape.mitemCreator('Move tool', { x: 610, y: 300 }).draggable()
)
draw.add(
  shape.mitemCreator('Machine time', { x: 700, y: 400 }).draggable()
)
draw.add(
  shape.mitemCreator('Установить', { x: 650, y: 700 }).draggable()
)

draw.add(
  shape
    .mitemCreator('Перевести взгляд', { x: 850, y: 400 })
    .draggable()
)
draw.add(shape.mitemCreator('Сесть', { x: 600, y: 200 }).draggable())
draw.add(
  shape.mitemCreator('Наклониться', { x: 750, y: 600 }).draggable()
)

draw.add(
  shape
    .mitemCreator('Very long element for acc...', { x: 550, y: 550 })
    .draggable()
)

draw.on('tds-mitem-directSelect', (ev: CustomEvent) => {
  draw.children().map((el) => {
    el instanceof mitem &&
      el.id() != ev.detail.id() &&
      (el.selected = false)
  })
})

let tt = new textarea({
  body: textareaDefStyle,
  rowsTitleStyle: extendsTittleDefStyle,
  headerTitleStyle: extendsHeaderDefStyle,
  data:
    'привет о новый чудный мир длинной не менее трех строк описание которого нужно уместить в пределы тела материального и духовного разума стремившегося к истокам',
}).draggable()
draw.add(tt)

console.log(performance.now() - startMS)
