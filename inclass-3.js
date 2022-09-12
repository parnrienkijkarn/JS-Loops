const topSellingMenus = [
  { id: 1, group: "เครื่องดื่ม", amount: 120, sales: 2000000.2314 },
  { id: 2, group: "ของหวาน", amount: 1, sales: 32000 },
  { id: 3, group: "จานหลัก", amount: 20, sales: 1000 },
  { id: 4, group: "ของทานเล่น", amount: 50, sales: 2000 },
  { id: 5, group: "เมนูพิเศษประจำฤดูกาล", amount: 50, sales: 222200 },
  { id: 6, group: "ลาเต้เย็น", amount: 120, sales: 12000 },
  { id: 7, group: "คาปูชิโน่", amount: 1, sales: 32000 },
  { id: 8, group: "ข้าวผัดอเมริกัน", amount: 20, sales: 1000 },
  { id: 9, group: "แพนเค้กช็อกโกแลต", amount: 50, sales: 2000 },
  { id: 10, group: "ไอศกรีมชาไทย", amount: 50, sales: 222200 },
  { id: 11, group: "ลาเต้เย็น", amount: 120, sales: 12000 },
  { id: 12, group: "คาปูชิโน่", amount: 1, sales: 32000 },
  { id: 13, group: "ข้าวผัดอเมริกัน", amount: 20, sales: 1000 },
  { id: 14, group: "แพนเค้กช็อกโกแลต", amount: 50, sales: 2000 },
  { id: 15, group: "ไอศกรีมชาไทย", amount: 50, sales: 222200 },
];

const totalSales = 0;

let findTotal;
for (let cost of topSellingMenus) {
  findTotal = cost.amount * cost.sales;
}

console.log(`Total sales of all items is ${findTotal}`);
