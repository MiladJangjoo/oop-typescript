import { v4 as uuidv4 } from 'uuid';

abstract class InventoryItem {
  private _id: string;
  private _name: string;
  private _price: number;
  private _description: string;

  constructor(name: string, price: number, description: string) {
    this._id = uuidv4();
    this._name = name;
    this._price = price;
    this._description = description;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get description(): string {
    return this._description;
  }

  set name(name: string) {
    this._name = name;
  }

  set price(price: number) {
    this._price = price;
  }

  set description(description: string) {
    this._description = description;
  }
}

class Weapon extends InventoryItem {
  private _damage: number;

  constructor(name: string, price: number, description: string, damage: number) {
    super(name, price, description);
    this._damage = damage;
  }

  get damage(): number {
    return this._damage;
  }

  set damage(damage: number) {
    this._damage = damage;
  }
}

class Armor extends InventoryItem {
  private _defense: number;

  constructor(name: string, price: number, description: string, defense: number) {
    super(name, price, description);
    this._defense = defense;
  }

  get defense(): number {
    return this._defense;
  }

  set defense(defense: number) {
    this._defense = defense;
  }
}

class Character {
  private _id: string;
  private _name: string;
  private _archtype: string;
  private _fightingStyle: 'melee' | 'ranged';
  private _inventory: InventoryItem[];

  constructor(name: string, archtype: string, fightingStyle: 'melee' | 'ranged') {
    this._id = uuidv4();
    this._name = name;
    this._archtype = archtype;
    this._fightingStyle = fightingStyle;
    this._inventory = [];
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get archtype(): string {
    return this._archtype;
  }

  get fightingStyle(): 'melee' | 'ranged' {
    return this._fightingStyle;
  }

  get inventory(): InventoryItem[] {
    return this._inventory;
  }

  set name(name: string) {
    this._name = name;
  }

  addItemToInventory(item: InventoryItem) {
    this._inventory.push(item);
  }
  removeFromInventory(item: InventoryItem) {
    this._inventory = this._inventory.filter((i) => i.id !== item.id);
  }

  inventoryValue(): number {
    return this._inventory.reduce((total, item) => total + item.price, 0);
  }

  printInventory() {
    console.log(`${this.name}'s Inventory:`);
    this._inventory.forEach((item) => {
      console.log(`- ${item.name}: $${item.price}`);
    });}
  
}

class Inventory {
  private _items: InventoryItem[];

  constructor() {
    this._items = [];
  }

  get items(): InventoryItem[] {
    return this._items;
  }

  addItem(item: InventoryItem) {
    this._items.push(item);
  }
}

class Shop {
  private _items: InventoryItem[];

  constructor() {
    this._items = [];
  }

  get items(): InventoryItem[] {
    return this._items;
  }


  
}

const char = new Character('milad', 'hi', 'melee');
const inventory = new Inventory();
const shop = new Shop();

inventory.addItem(new Weapon('tara', 20, 'knife', 5));
inventory.addItem(new Armor('sean', 30, 'shield', 15));
inventory.addItem(new Weapon('dylan', 35, 'gun', 6));




char.printInventory();


char.removeFromInventory(inventory.items[0]);


char.printInventory();


console.log(`Total: $${char.inventoryValue()}`);


console.log('Shop Inv:');
shop.items.forEach((item, index) => {
  console.log(`${index + 1}. ${item.name} - $${item.price}`);
