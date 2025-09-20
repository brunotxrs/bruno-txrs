import {  db  }  from './firebase-config';
import { collection, 
  addDoc, 
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  increment } from 'firebase/firestore';

// Adiciona um novo comentário na coleção 'comments'
const addComment = async (name, text, role) => {
  try {
    await addDoc(collection(db, "comments"), {
      name: name,  // campo para o nome do visitante
      text: text, // campo para o texto do comentário
      role: role, // campo para a função do visitante
      createdAt: serverTimestamp() // Adiciona um carimbo de tempo do servidor
    });
    console.log("Comentário adicionado com sucesso!");
    return true;
  } catch (e) {
    console.error("Erro ao adicionar comentário:", e);
    return false;
  }
};

// Busca os 3 últimos comentários, ordenando pela data de criação
const getComments = async () => {
  const commentsCollectionRef = collection(db, "comments");
  const q = query(commentsCollectionRef, orderBy("createdAt", "desc"), limit(3));
  const querySnapshot = await getDocs(q);
  const comments = [];
  querySnapshot.forEach((doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  return comments;
};

// Obtém o número total de comentários no contador
const getCommentsCount = async () => {
  const countRef = doc(db, "counters", "comments_count");
  const docSnap = await getDoc(countRef);

  if (docSnap.exists()) {
    return docSnap.data().count;
  }
  return 0;
};

// Incrementa o contador de comentários
const incrementCommentsCount = async () => {
  const countRef = doc(db, "counters", "comments_count");
  await updateDoc(countRef, {
    count: increment(1)
  });
};

export { addComment, getComments, getCommentsCount, incrementCommentsCount };
