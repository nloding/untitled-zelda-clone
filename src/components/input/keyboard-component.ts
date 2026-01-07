import { InputComponent } from "./input-component";

export class KeyboardComponent extends InputComponent {
  #cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  #attackKey: Phaser.Input.Keyboard.Key;
  #actionKey: Phaser.Input.Keyboard.Key;
  #enterKey: Phaser.Input.Keyboard.Key;

  constructor(keyboardPlugin: Phaser.Input.Keyboard.KeyboardPlugin) {
    super();

    this.#cursorKeys = keyboardPlugin.createCursorKeys(); // up, down, left, right
    this.#attackKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.#actionKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    this.#enterKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  get isUpButtonDown(): boolean {
    return this.#cursorKeys.up.isDown;
  }

  get isUpButtonJustDown(): boolean {
    return Phaser.Input.Keyboard.JustDown(this.#cursorKeys.up);
  }

  get isDownButtonDown(): boolean {
    return this.#cursorKeys.down.isDown;
  }

  get isDownButtonJustDown(): boolean {
    return Phaser.Input.Keyboard.JustDown(this.#cursorKeys.down);
  }

  get isLeftButtonDown(): boolean {
    return this.#cursorKeys.left.isDown;
  }

  get isRightButtonDown(): boolean {
    return this.#cursorKeys.right.isDown;
  }

  get isActionButtonJustDown(): boolean {
    return Phaser.Input.Keyboard.JustDown(this.#actionKey);
  }

  get isAttackButtonJustDown(): boolean {
    return Phaser.Input.Keyboard.JustDown(this.#attackKey);
  }

  get isSelectButtonJustDown(): boolean {
    return Phaser.Input.Keyboard.JustDown(this.#cursorKeys.shift);
  }

  get isEnterButtonJustDown(): boolean {
    return Phaser.Input.Keyboard.JustDown(this.#enterKey);
  }

}