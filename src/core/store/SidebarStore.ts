import { create } from 'zustand'

interface Props {
    active: boolean,
    setActive: (state: boolean) => void,
}

const SidebarStore = create<Props>((set) => ({
    active: false,
    setActive: (active: boolean) => set(() => ({active})),
}));

export default SidebarStore;
