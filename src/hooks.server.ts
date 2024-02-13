import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import GoogleProvider from '@auth/sveltekit/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';

import prisma from '$lib/prisma';

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';

const first = SvelteKitAuth(async () => {
   const authOptions = {
      adapter: PrismaAdapter(prisma),
      providers: [
         GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
         })
      ],
      pages: {
         newUser: '/new-user'
      },
      secret: AUTH_SECRET,
      trustHost: true,
   };
   return authOptions;
}) satisfies Handle;

const second = async ({ event, resolve }) => {
   const session = await event.locals.getSession();
   
   if(session == null) {
      return await resolve(event);
   }

   event.cookies.set('userId', session.user.userId, {
      secure: true,
      httpOnly: true,
      path: '/',
   });

   return await resolve(event);
}

export const handle = sequence(first, second);
