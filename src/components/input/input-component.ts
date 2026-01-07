export class InputComponent {
  #upButton: boolean;
  #downButton: boolean;
  #leftButton: boolean;
  #rightButton: boolean;
  #actionButton: boolean;
  #attackButton: boolean;
  #selectButton: boolean;
  #enterButton: boolean;

  constructor() {
    this.#upButton = false;
    this.#downButton = false;
    this.#leftButton = false;
    this.#rightButton = false;
    this.#actionButton = false;
    this.#attackButton = false;
    this.#selectButton = false;
    this.#enterButton = false;
  }

  public reset(): void {
    this.#upButton = false;
    this.#downButton = false;
    this.#leftButton = false;
    this.#rightButton = false;
    this.#actionButton = false;
    this.#attackButton = false;
    this.#selectButton = false;
    this.#enterButton = false;
  }

  get isUpButtonDown(): boolean {
    return this.#upButton;
  }

  set isUpButtonDown(val: boolean) {
    this.#upButton = val;
  }

  get isUpButtonJustDown(): boolean {
    return this.#upButton;
  }

  get isDownButtonDown(): boolean {
    return this.#downButton;
  }

  set isDownButtonDown(val: boolean) {
    this.#downButton = val;
  }

  get isDownButtonJustDown(): boolean {
    return this.#downButton;
  }

  get isLeftButtonDown(): boolean {
    return this.#leftButton;
  }

  set isLeftButtonDown(val: boolean) {
    this.#leftButton = val;
  }

  get isRightButtonDown(): boolean {
    return this.#rightButton;
  }

  set isRightButtonDown(val: boolean) {
    this.#rightButton = val;
  }

  get isActionButtonJustDown(): boolean {
    return this.#actionButton;
  }

  set isActionButtonJustDown(val: boolean) {
    this.#actionButton = val;
  }

  get isAttackButtonJustDown(): boolean {
    return this.#attackButton;
  }

  set isAttackButtonJustDown(val: boolean) {
    this.#attackButton = val;
  }

  get isSelectButtonJustDown(): boolean {
    return this.#selectButton;
  }

  set isSelectButtonJustDown(val: boolean) {
    this.#selectButton = val;
  }

  get isEnterButtonJustDown(): boolean {
    return this.#enterButton;
  }

  set isEnterButtonJustDown(val: boolean) {
    this.#enterButton = val;
  }
}