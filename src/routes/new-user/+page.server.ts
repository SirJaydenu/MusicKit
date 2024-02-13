import prisma from '$lib/prisma';
import { Grade } from '@prisma/client';
import type { Actions } from './$types';

export const actions = {
   default: async ({cookies, request}) => {
      const data = await request.formData();
      const id = cookies.get('userId')
      
      let name;
      if(data.get('name') != null) {
         name = data.get('name')!.toString();
      } else {
         name = 'no name provided';
      }

      let grade;
      if(data.get('grade') != null) {
         if(data.get('grade')!.toString() == 'freshman') {
            grade = Grade.FRESHMAN;
         } else if(data.get('grade')!.toString() == '')
      }
      
      prisma.student.create({
         data: {
            userId: id,
            name: 
            grade: 
         }
      })
   }
} satisfies Actions;
