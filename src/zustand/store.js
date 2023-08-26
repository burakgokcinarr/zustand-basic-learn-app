import { create } from 'zustand';

/*
  Zustand State ve/veya Action işlemleri için aşağıdaki gibi metod adı ve işlevler tanımlanmalıdır. Burada örnek olarak fetch api ve arttırma
  metodları tanımlanmıştır. (getAllUser metodu için "users" state'i, increment metodu için ise "count" state'i tanımlanmıştır.)
*/

export const useUserStore = create((set) => ({
  users: [],  // State One
  count: 0,   // State Two
  getAllUsers: async (url) => {
    const response = await fetch(url)
    set({ users: await response.json() })
  },
  increment: () => set((state) => ({ count: state.count + 1 }))
}))