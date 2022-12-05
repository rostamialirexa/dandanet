import fs from 'fs';
import path from 'path';
export function buildProductsPath(){
    return path.join(process.cwd(),'Data','Products.json');
}
export function extractProducts(filePath){
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData);
    return data;
}


export default function handler(req,res){
    const filePath = buildProductsPath();
    const data = extractProducts(filePath);
    res.status(200).json({ Products: data })
}
