import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'

import * as shape from '../tds-shapes/tds-shapes-entry'
import { G } from '@svgdotjs/svg.js'
import { label, LabelAttr } from '../tds-shapes/src/label'
import {
  BackgroundStyle,
  ItemIconStyle,
  ListAttrDefault,
  objectMerge,
  TitleStyle,
} from '../tds-shapes/src/common'
import {
  ItemDefaultBehavior,
  ItemPartsBehavior,
  ListItemAttr,
} from '../tds-shapes/tds-shapes-entry'
import { list } from '../tds-shapes/src/list'

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

/** slider demo item */
let slidersGroup = new G().addClass('draggable')
let sliderDemo = shape.slider.demo(draw)

slidersGroup
  .rect(400, 400)
  .radius(20)
  .fill({ color: '#EEEEEE' })
  .stroke({ color: '#D2D2D2', width: 1 })

let hs = sliderDemo.horizontal
slidersGroup
  .move(90, 90)
  .draggable()
  .add(hs.move(200, 130))
  .add(sliderDemo.vertical[0].move(180, 176))
  .add(sliderDemo.vertical[1].move(120, 176))
  .add(sliderDemo.htwostate.move(280, 220))
  .add(sliderDemo.tickHor.move(280, 270))
  .add(sliderDemo.nonCirclePin.move(200, 400))

draw.add(slidersGroup)

slidersGroup.move(200, 250)

//#endregion

let ls = new shape.list(ListAttrDefault).draggable()
draw.add(ls)
ls.move(350, 50)

let cbt: TitleStyle = {
  value: 'Your choice:',
  font: 'Menlo',
  fontWeight: 'normal',
  size: 12,
  fill: { color: 'black' },
  position: { x: -90, y: 10 },
}
let cb = new shape.combobox(ListAttrDefault, 3, cbt).draggable()
draw.add(cb)
cb.move(650, 50)

console.log(performance.now() - startMS)
