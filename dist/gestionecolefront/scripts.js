!function(t){"use strict";var r=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,f=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),b=f&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),d=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,B=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,a=(f||d)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,o,n,r,a,i,l,u,c;if(!(e=t.match(B)))throw new Error("invalid data URI");for(o=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),n=!!e[4],r=t.slice(e[0].length),a=(n?atob:decodeURIComponent)(r),i=new ArrayBuffer(a.length),l=new Uint8Array(i),u=0;u<a.length;u+=1)l[u]=a.charCodeAt(u);return f?new Blob([b?l:i],{type:o}):((c=new d).append(i),c.getBlob(o))};t.HTMLCanvasElement&&!r.toBlob&&(r.mozGetAsFile?r.toBlob=function(t,e,o){var n=this;setTimeout(function(){o&&r.toDataURL&&a?t(a(n.toDataURL(e,o))):t(n.mozGetAsFile("blob",e))})}:r.toDataURL&&a&&(r.toBlob=function(t,e,o){var n=this;setTimeout(function(){t(a(n.toDataURL(e,o)))})})),"function"==typeof define&&define.amd?define(function(){return a}):"object"==typeof module&&module.exports?module.exports=a:t.dataURLtoBlob=a}(window);
//# sourceMappingURL=canvas-to-blob.min.js.map
;