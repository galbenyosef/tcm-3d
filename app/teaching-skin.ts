import type {BufferGeometry} from 'three';
/** Classroom surface simplification; original atlas buffers on disk stay intact. */
export function softenPelvicSurface(geometry:BufferGeometry){
 const position=geometry.getAttribute('position').clone();geometry.setAttribute('position',position);
 const smooth=(a:number,b:number,x:number)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t);};
 for(let i=0;i<position.count;i++){
  const x=position.getX(i),y=position.getY(i),z=position.getZ(i);
  const w=(1-smooth(.027,.060,Math.abs(x)))*smooth(.735,.770,y)*(1-smooth(.855,.900,y))*smooth(.005,.038,z);
  if(w===0)continue;
  position.setY(i,y+(.835+(y-.835)*.22-y)*w);
  position.setZ(i,z+(.022+(z-.022)*.1-z)*w);
 }
 position.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
}
