import fs from 'fs';
import path from 'path';
export function buildBrandsPath(){
    return path.join(process.cwd(),'Data','Brands.json');
}
export function extractBrands(filePath){
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData);
    return data;
}


export default function handler(req,res){
    const filePath = buildBrandsPath();
    const data = extractBrands(filePath);
    res.status(200).json({ Brands: data })
}
