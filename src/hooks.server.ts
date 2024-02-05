import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import GoogleProvider from '@auth/sveltekit/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '$lib/prisma';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth(async () => {
   const authOptions = {
      adapter: PrismaAdapter(prisma),
      providers: [
         GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
         })
      ]
   };
   return authOptions;
}) satisfies Handle;
