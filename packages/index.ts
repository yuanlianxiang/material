/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { InputPlugin } from './Input';
import { CheckboxPlugin } from './Checkbox';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    InputPlugin.install?.(app);
    CheckboxPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Button'
export * from './Input'
export * from './Checkbox'