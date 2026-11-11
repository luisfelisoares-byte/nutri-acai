import test from 'node:test';import assert from 'node:assert/strict';
import { publishedSupplierGroups, supplierGroups } from '../src/content/suppliers.ts';
const valid = {id:'fixture-only',city:'Município de teste',state:'ZZ',illustrative:false,suppliers:[{id:'fixture',tradeName:'Registro exclusivo de teste',city:'Município de teste',state:'ZZ',phone:null,whatsapp:null,servedRegions:[],catalog:null,confirmationStatus:'confirmed',publicationStatus:'approved'}]};
test('actual illustrative municipality is never offered as a confirmed locality',()=>assert.deepEqual(publishedSupplierGroups(supplierGroups),[]));
test('confirmed approved record is eligible for the matching locality',()=>assert.equal(publishedSupplierGroups([valid])[0].suppliers.length,1));
test('illustrative, draft, unconfirmed, unnamed or mismatched records are excluded',()=>{
 for(const change of [{confirmationStatus:'pending'},{publicationStatus:'draft'},{publicationStatus:'demo'},{tradeName:null},{city:'Outra fixture'},{state:'YY'}])assert.deepEqual(publishedSupplierGroups([{...valid,suppliers:[{...valid.suppliers[0],...change}]}]),[]);
 assert.deepEqual(publishedSupplierGroups([{...valid,illustrative:true}]),[]);assert.deepEqual(publishedSupplierGroups([{...valid,city:''}]),[]);
});
