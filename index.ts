import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'

import * as shape from '../tds-shapes/tds-shapes-entry'
import { G } from '@svgdotjs/svg.js'
import { label, LabelAttr } from '../tds-shapes/src/label'
import {
  BackgroundStyle,
  ItemIconStyle,
  objectMerge,
  TitleStyle,
} from '../tds-shapes/src/common'
import {
  ItemDefaultBehavior,
  ItemPartsBehavior,
} from '../tds-shapes/tds-shapes-entry'

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

const rightChevron =
  'M6.8 6C6.8 5.8 6.7 5.7 6.6 5.5L1.1 0.2C1 0.1 0.8 0 0.6 0 0.3 0 0 0.3 0 0.6 0 0.8 0.1 1 0.2 1.1L5.2 6 0.2 10.9C0.1 11 0 11.2 0 11.4 0 11.7 0.3 12 0.6 12 0.8 12 1 11.9 1.1 11.8L6.6 6.5C6.7 6.3 6.8 6.2 6.8 6Z'
const generaltemStyleCreator = (
  s: string | number,
  pos: { x: number; y: number } = { x: 0, y: 0 }
): {
  label: LabelAttr
  icon?: ItemIconStyle
  shortcut?: TitleStyle
} => {
  return {
    label: {
      title: {
        value: typeof s == 'number' ? s.toString() : s,
        font: 'Menlo',
        fontWeight: 'normal',
        size: 12,
        fill: { color: 'black' },
        position: { x: 0, y: 0 },
      },
      background: {
        width: 120,
        height: 0,
        fill: { color: '#EEEEEE' },
        stroke: { color: '#D2D2D2', width: 1 },
        radius: 7,
        position: { x: 0, y: 0 },
      },
      backgroundRule: ['indent'],
      indents: [5, 3, 5, 3],
      position: { x: pos.x, y: pos.y },
    },
  }
}
const iconItemStyleCreator = (
  s: string | number,
  pos: { x: number; y: number } = { x: 0, y: 0 },
  path: string
): {
  label: LabelAttr
  icon?: ItemIconStyle
  shortcut?: TitleStyle
} => {
  return {
    label: {
      title: {
        value: typeof s == 'number' ? s.toString() : s,
        font: 'Menlo',
        fontWeight: 'normal',
        size: 12,
        fill: { color: 'black' },
        position: { x: 0, y: 0 },
      },
      background: {
        width: 120,
        height: 0,
        fill: { color: '#EEEEEE' },
        stroke: { color: '#D2D2D2', width: 1 },
        radius: 7,
        position: { x: 0, y: 0 },
      },
      backgroundRule: ['indent'],
      indents: [5, 3, 5, 3],
      position: { x: pos.x, y: pos.y },
    },
    icon: {
      d: path,
      fill: { color: 'transparent' },
      stroke: { color: 'black' },
    },
  }
}
const shortcutItemStyleCreator = (
  s: string | number,
  pos: { x: number; y: number } = { x: 0, y: 0 },
  sc: string
): {
  label: LabelAttr
  icon?: ItemIconStyle
  shortcut?: TitleStyle
} => {
  return {
    label: {
      title: {
        value: typeof s == 'number' ? s.toString() : s,
        font: 'Menlo',
        fontWeight: 'normal',
        size: 12,
        fill: { color: 'black' },
        position: { x: 0, y: 0 },
      },
      background: {
        width: 120,
        height: 0,
        fill: { color: '#EEEEEE' },
        stroke: { color: '#D2D2D2', width: 1 },
        radius: 7,
        position: { x: 0, y: 0 },
      },
      backgroundRule: ['indent'],
      indents: [5, 3, 5, 3],
      position: { x: pos.x, y: pos.y },
    },
    shortcut: {
      value: sc,
      font: 'Menlo',
      fontWeight: 'normal',
      size: 12,
      fill: { color: '' },
      position: { x: 0, y: 0 },
    },
  }
}

let generalItemStyle = generaltemStyleCreator('Make delay', {
  x: 0,
  y: 0,
})

let iconItemStyle = iconItemStyleCreator(
  'Reach by hand',
  { x: 0, y: 0 },
  rightChevron
)

let shortcutItemStyle = shortcutItemStyleCreator(
  'Bend down',
  { x: 0, y: 0 },
  'cmd + X'
)

let generalItem = new shape.listItem({
  kind: 'general',
  width: 200,
  label: generalItemStyle.label,
})

let iconItem = new shape.listItem({
  kind: 'icon',
  width: 200,
  label: iconItemStyle.label,
  icon: iconItemStyle.icon,
})

let shotcutItem = new shape.listItem({
  kind: 'shortcut',
  width: 200,
  label: shortcutItemStyle.label,
  shortcut: shortcutItemStyle.shortcut,
})

console.log(shotcutItem.behavior)

console.log(performance.now() - startMS)
