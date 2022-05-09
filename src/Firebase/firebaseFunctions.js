import { db } from './firebase';
import { collection, getDocs, getDoc, query, doc, addDoc, deleteDoc, updateDoc, Timestamp, orderBy } from "firebase/firestore";

const OrdersCollection = collection(db, 'orders');

// ALTA
export const createOrder = async (cart, nameClient, addDetalls, numOrder, numTable, nameWaiter) => {

    try {
        console.log('estoy en create order');

        console.log(cart, nameClient, addDetalls, numOrder, numTable, nameWaiter);
        const docRef = await addDoc(OrdersCollection, {
            Order: cart, 
            nameClient: nameClient || null,
            addDetalls: addDetalls|| null,
            numOrder: numOrder+ 1 || null,
            numTable: numTable|| null,
            nameWaiter: nameWaiter|| null,
            status : 'pendiente',
            dateOrder: Timestamp.fromDate(new Date())
        });
        console.log('terminando',docRef.id);
    } catch (e) {
        console.log('error', e);
    }

}


// CONSULTA
export const getOrders = async () => {
    const result = await getDocs(query(OrdersCollection), orderBy('dateOrder', 'desc'));
    return result;

}

// // REMOVE
// await deleteDoc(doc(db, 'orders'));

// // UPDATE
// await updateDoc(doc(db, 'orders'), {})