import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
   const session = await event.locals.getSession();

   if(!session) {
      redirect(307, 'auth/signin');
   }

   return {
      session: session,
      test: 'hello',
   }
}
