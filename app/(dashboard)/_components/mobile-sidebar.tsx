import { Menu } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Sidebar } from './sidebar';

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition-all'>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0 bg-[#9bb3b1]'>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}
