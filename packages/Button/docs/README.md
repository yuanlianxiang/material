<!-- 加载 demo 组件 start -->
<script setup>
import { onMounted, nextTick } from "vue"
import demo from './demo.vue'
import Prism from "prismjs";
import "../../../src/assets/prism.css";

onMounted(async () => {
  await nextTick()
  Prism.highlightAll();
})
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Button按钮
<p>常用的操作按钮</p>

## 示例1-类型
<ui-button>Normal</ui-button>
<ui-button type="primary">primary</ui-button>
<ui-button type="warning">Warning</ui-button>
<ui-button type="success">Success</ui-button>
<ui-button type="danger">Danger</ui-button>

#### 代码
```html
<ui-button>Normal</ui-button>
<ui-button type="primary"></ui-button>
<ui-button type="warning">Warning</ui-button>
<ui-button type="success">Success</ui-button>
<ui-button type="danger">Danger</ui-button>
```

## 示例2-大小
<ui-button type="primary" size="mini">小按钮</ui-button>
<ui-button type="primary" size="small">正常按钮</ui-button>
<ui-button type="primary" size="medium">大按钮</ui-button>

#### 代码
```html
 <ui-button type="primary" size="mini">小按钮</ui-button>
 <ui-button type="primary" size="small">正常按钮</ui-button>
 <ui-button type="primary" size="medium">大按钮</ui-button>
```

## 示例3-图标
<ui-button type="primary" icon="iconfont form-loading" circle></ui-button>
<ui-button type="warning" icon="iconfont form-see" circle></ui-button>
<ui-button type="success" icon="iconfont form-msg-success" circle></ui-button>
<ui-button type="danger" icon="iconfont form-delete" circle></ui-button>

### 代码
```html
<ui-button type="primary" icon="iconfont form-loading" circle></ui-button>
<ui-button type="danger" icon="iconfont form-delete" circle></ui-button>
```

## 示例4-圆角
<ui-button type="primary" round>primary</ui-button>
<ui-button type="warning" round>Warning</ui-button>
<ui-button type="success" round>Success</ui-button>
<ui-button type="danger" round>Danger</ui-button>

### 代码
```html
<ui-button type="primary" round>primary</ui-button>
<ui-button type="warning" round>Warning</ui-button>
<ui-button type="success" round>Success</ui-button>
<ui-button type="danger" round>Danger</ui-button>
```

## 示例5-禁用状态
<ui-button type="primary" disabled>primary</ui-button>
<ui-button type="warning" disabled>Warning</ui-button>
<ui-button type="success" disabled>Success</ui-button>
<ui-button type="danger" disabled>Danger</ui-button>

### 代码
```html
<ui-button type="primary" disabled>primary</ui-button>
<ui-button type="warning" disabled>Warning</ui-button>
<ui-button type="success" disabled>Success</ui-button>
<ui-button type="danger" disabled>Danger</ui-button>
```

## 示例6-加载中
<ui-button type="primary" :loading="true">加载中</ui-button>

### 代码
```html
<ui-button type="primary" :loading="true">加载中</ui-button>
```
## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`type` | 类型 | string | `primary` `success` `warning` | `primary` | 否
`size` | 大小 | string | `mini` `small` `medium` | `small` | 否
`disabled` | 是否禁用 | boolean | `true` `false` | `false` | 否
`round` | 圆角 | boolean | `true` `false` | `false` | 否
`loading` | 加载 | boolean | `true` `false` | `false` | 否
`circle` | 圆形 | boolean | `true` `false` | `false` | 否
`autofocus` | 是否默认聚焦 | boolean | `true` `false` | `false` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event