import prisma from '$lib/prisma';
import { Grade, User } from '@prisma/client';
import type { Actions } from './$types';

export const actions = {
   default: async ({locals, request}) => {
      const data = await request.formData();
      const session = await locals.auth();
      console.log(session);
      
      let name;
      if(data.get('name') != null) {
         name = data.get('name')!.toString();
      } else {
         throw Error();
      }

      console.log(data);

      let grade;
      if(data.get('grade') != null) {
         if(data.get('grade')!.toString() == 'FRESHMAN') {
            grade = Grade.FRESHMAN;
         } else if(data.get('grade')!.toString() == 'SOPHOMORE') {
            grade = Grade.SOPHOMORE;
         } else if(data.get('grade')!.toString() == 'JUNIOR') {
            grade = Grade.JUNIOR;
         } else if(data.get('grade')!.toString() == 'SENIOR') {
            grade = Grade.SENIOR;
         } else {
            throw Error();
         }
      } else {
         throw Error();
      }

      let user = await prisma.user.findUnique({
         where: {
            email: session?.user?.email!,
         }
      });
      
      await prisma.student.create({
         data: {
            userId: user!.id,
            name: name,
            grade: grade,
         },
         skipDuplicates: true,
      });
   }
} satisfies Actions;
