import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { Grade } from '@prisma/client';
import type { Song, Album, Artist } from '@prisma/client';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
   const session = await event.locals.getSession();

   if(!session) {
      redirect(307, 'auth/signin');
   }

   let user = await prisma.user.findUnique({
      where: {
         id: session.user!.id,
         email: session.user!.email!
      },
      include: {
         student: true
      }
   });

   let student;
   if(user!.student == null) {
      redirect(307, 'new-user');
   } else {
      student = await prisma.student.findUnique({
         where: {
            userId: user!.id,
         }
      });
   }

   let additions: (Song | Album | Artist)[] = [];
   (await prisma.song.findMany({
      where: {
         studentId: student!.id
      }
   })).forEach((value) => {
      additions.push(value);
   });
   
   (await prisma.album.findMany({
      where: {
         studentId: student!.id
      }
   })).forEach((value) => {
      additions.push(value);
   });
   
   (await prisma.artist.findMany({
      where: {
         studentId: student!.id
      }
   })).forEach((value) => {
      additions.push(value);
   });
   
   return {
      session: session,
      student: student,
      additions: additions,
   }
}
