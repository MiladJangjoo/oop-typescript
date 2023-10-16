// import { v4 as uuidv4 } from 'uuid';

// abstract class InventoryItem {
//   private _id: string;
//   private _name: string;
//   private _price: number;
//   private _description: string;

//   constructor(name: string, price: number, description: string) {
//     this._id = uuidv4();
//     this._name = name;
//     this._price = price;
//     this._description = description;
//   }

//   get id(): string {
//     return this._id;
//   }

//   get name(): string {
//     return this._name;
//   }

//   get price(): number {
//     return this._price;
//   }

//   get description(): string {
//     return this._description;
//   }

//   set name(name: string) {
//     this._name = name;
//   }

//   set price(price: number) {
//     this._price = price;
//   }

//   set description(description: string) {
//     this._description = description;
//   }
// }

// class Weapon extends InventoryItem {
//   private _damage: number;

//   constructor(name: string, price: number, description: string, damage: number) {
//     super(name, price, description);
//     this._damage = damage;
//   }

//   get damage(): number {
//     return this._damage;
//   }

//   set damage(damage: number) {
//     this._damage = damage;
//   }
// }

// class Armor extends InventoryItem {
//   private _defense: number;

//   constructor(name: string, price: number, description: string, defense: number) {
//     super(name, price, description);
//     this._defense = defense;
//   }

//   get defense(): number {
//     return this._defense;
//   }

//   set defense(defense: number) {
//     this._defense = defense;
//   }
// }

// class Character {
//   private _id: string;
//   private _name: string;
//   private _archtype: string;
//   private _fightingStyle: 'melee' | 'ranged';
//   private _inventory: InventoryItem[];
  
  

//   constructor(name: string, archtype: string, fightingStyle: 'melee' | 'ranged') {
//     this._id = uuidv4();
//     this._name = name;
//     this._archtype = archtype;
//     this._fightingStyle = fightingStyle;
//     this._inventory = [];
//   }

//   get id(): string {
//     return this._id;
//   }

//   get name(): string {
//     return this._name;
//   }

//   get archtype(): string {
//     return this._archtype;
//   }

//   get fightingStyle(): 'melee' | 'ranged' {
//     return this._fightingStyle;
//   }

//   get inventory(): InventoryItem[] {
//     return this._inventory;
//   }

//   set name(name: string) {
//     this._name = name;
//   }

//   static createRPGCharacter(name:string,race:string): string {
//     const newCharacter = `My name is ${name} with race of ${race}`
//     return newCharacter
//   }

//   inventoryHTMLElement():HTMLElement{
//     const container = document.createElement("div");
//     const section = document.querySelector('section')
    
//     container.classList.add('container')
//     this.inventory.forEach(function(item){
//     const p = document.createElement('p');
//     p.classList.add('p')
//     const button = document.createElement('button')
//     button.innerText = 'Delete'
//     button.addEventListener('click', () => {
//       p.remove()

//     p.append(container)
//     container.append(section!)
//     })
    
//     })
    
   
//     return container

//   }



//   addItemToInventory(item: InventoryItem) {
//     this._inventory.push(item);
//   }
//   removeFromInventory(item: InventoryItem) {
//     this._inventory = this._inventory.filter((i) => i.id !== item.id);
//   }

//   inventoryValue(): number {
//     return this._inventory.reduce((total, item) => total + item.price, 0);
//   }

//   printInventory() {
//     console.log(`${this.name}'s Inventory:`);
//     this._inventory.forEach((item) => {
//       console.log(`- ${item.name}: $${item.price}`);
//     });}
  
// }

// class Inventory {
//   private _items: InventoryItem[];

//   constructor() {
//     this._items = [];
//   }

//   get items(): InventoryItem[] {
//     return this._items;
//   }

//   addItem(item: InventoryItem) {
//     this._items.push(item);
//   }
// }

// class Shop {
//   private _items: InventoryItem[];

//   constructor() {
//     this._items = [];
//   }

//   get items(): InventoryItem[] {
//     return this._items;
//   }


  
// }

// const char = new Character('milad', 'hi', 'melee');
// const inventory = new Inventory();
// const shop = new Shop();

// inventory.addItem(new Weapon('tara', 20, 'knife', 5));
// inventory.addItem(new Armor('sean', 30, 'shield', 15));
// inventory.addItem(new Weapon('dylan', 35, 'gun', 6));




// char.printInventory();



// char.removeFromInventory(inventory.items[0]);


// char.printInventory();


// console.log(`Total: $${char.inventoryValue()}`);


// console.log('Shop Inv:');
// shop.items.forEach((item, index) => {
//   console.log(`${index + 1}. ${item.name} - $${item.price}`);})

// const example1 = Character.createRPGCharacter('milad','tara')
// console.log(example1,'============================')

class Character {
  private name: string;
  private race: string;
  private inventory: { name: string; quantity: number; details: string }[] = [];

  constructor(name: string, race: string) {
    this.name = name;
    this.race = race;
  }

  public static createRPGCharacter(name: string, race: string): Character {
    return new Character(name, race);
  }


  public inventoryHTMLElement(): HTMLElement {
    const characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    const nameElement = document.createElement("p");
    nameElement.textContent = `Name: ${this.name}`;

    const raceElement = document.createElement("p");
    raceElement.textContent = `Race: ${this.race}`;

    const inventoryList = document.createElement("ul");
    inventoryList.classList.add("inventory-list");

    this.inventory.forEach((item) => {
      const itemElement = document.createElement("li");
      itemElement.textContent = `${item.name} (Quantity: ${item.quantity}) - ${item.details}`;
      inventoryList.appendChild(itemElement);
    });

    characterContainer.appendChild(nameElement);
    characterContainer.appendChild(raceElement);
    characterContainer.appendChild(inventoryList);

    return characterContainer;
  }

  public addItems(items: { name: string; quantity: number; details: string }[]): void {
    this.inventory.push(...items);
  }

  public removeItem(index: number, quantityToRemove: number): void {
    if (index >= 0 && index < this.inventory.length) {
      this.inventory[index].quantity -= quantityToRemove;
      if (this.inventory[index].quantity <= 0) {
        this.inventory.splice(index, 1);
      }
    }
  }
}

class Inventory {
  private items: { name: string; quantity: number; details: string }[] = [];

  constructor(items: { name: string; quantity: number; details: string }[]) {
    this.items = items;
  }

  public showItems(character: Character): void {
    // Implement code to display items in the "Shop" div
  }

  public updateInventory(character: Character): void {
    // Implement code to update the character's inventory in the "Inventory" div
  }

  public static createRPGItems(): { name: string; quantity: number; details: string }[] {
    // Implement code to create and return initial inventory items
    return [
      { name: "Health Potion", quantity: 3, details: "Restores 50 HP" },
      { name: "Mana Potion", quantity: 5, details: "Restores 30 MP" },
      { name: "Sword", quantity: 1, details: "Damage: 20-40" },
    ];
  }
}

// Driver code
const initialItems = Inventory.createRPGItems();
const inventory = new Inventory(initialItems);

const character = Character.createRPGCharacter("Character Name", "Character Race");
character.addItems(initialItems);

// Attach event listener for creating an RPG character
const createCharacterButton = document.getElementById("create-character-button");
if (createCharacterButton) {
  createCharacterButton.addEventListener("click", () => {
    // Get character's name and race from user input
    const nameInput = document.getElementById("name-input") as HTMLInputElement;
    const raceInput = document.getElementById("race-input") as HTMLInputElement;
    const name = nameInput.value;
    const race = raceInput.value;

    // Create a new RPG character and update the inventory
    const character = Character.createRPGCharacter(name, race);
    character.addItems(initialItems);
    inventory.updateInventory(character);
  });
}

// Show initial items in the "Shop" div
inventory.showItems(character);


const characterr = Character.createRPGCharacter("John", "Human");
console.log("Created RPG Character:", character);

character.addItems([
  { name: "Health Potion", quantity: 3, details: "Restores 50 HP" },
  { name: "Mana Potion", quantity: 5, details: "Restores 30 MP" },
  { name: "Sword", quantity: 1, details: "Damage: 20-40" },
]);

const characterContainer = character.inventoryHTMLElement();
document.body.appendChild(characterContainer);


