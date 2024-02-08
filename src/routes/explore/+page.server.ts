import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
   let songs = await prisma.song.findMany();

   let albums = await prisma.album.findMany();

   let artists = await prisma.artist.findMany();

   return {
      songs: songs,
      albums: albums,
      artists: artists,
   }
}
