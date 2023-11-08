"use strict";(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[8724],{88724:function(e,t,r){r.r(t),r.d(t,{FileHandle:function(){return H},FolderHandle:function(){return E},Sink:function(){return g},default:function(){return I}});var n=r(11092),i=r(27791),s=r(19113),a=r(649),o=r(22951),u=r(91976),c=r(22265),f=r(38692),h=r(66709);function l(e){var t={},r=!1;function n(t,n){return r=!0,n=new Promise((function(r){r(e[t](n))})),{done:!1,value:new h.Z(n,1)}}return t["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},t.next=function(e){return r?(r=!1,e):n("next",e)},"function"==typeof e.throw&&(t.throw=function(e){if(r)throw r=!1,e;return n("throw",e)}),"function"==typeof e.return&&(t.return=function(e){return r?(r=!1,e):n("return",e)}),t}var p=r(187),Z=r(69758),d=r(60643),w=d.Z.File,v=d.Z.Blob,k=d.Z.DOMException,b=Z.errors.INVALID,y=Z.errors.GONE,x=Z.errors.MISMATCH,_=Z.errors.MOD_ERR,m=Z.errors.SYNTAX,z=(Z.errors.SECURITY,Z.errors.DISALLOWED),g=function(){function e(t,r){(0,o.Z)(this,e),this.fileHandle=t,this.file=r,this.size=r.size,this.position=0}return(0,u.Z)(e,[{key:"write",value:function(e){var t=this.file;if("object"===typeof e)if("write"===e.type){if(Number.isInteger(e.position)&&e.position>=0&&(this.position=e.position,this.size<e.position&&(this.file=new w([this.file,new ArrayBuffer(e.position-this.size)],this.file.name,this.file))),!("data"in e))throw(0,s.Z)(k,(0,a.Z)(m("write requires a data argument")));e=e.data}else{if("seek"===e.type){if(Number.isInteger(e.position)&&e.position>=0){if(this.size<e.position)throw(0,s.Z)(k,(0,a.Z)(b));return void(this.position=e.position)}throw(0,s.Z)(k,(0,a.Z)(m("seek requires a position argument")))}if("truncate"===e.type){if(Number.isInteger(e.size)&&e.size>=0)return t=e.size<this.size?new w([t.slice(0,e.size)],t.name,t):new w([t,new Uint8Array(e.size-this.size)],t.name),this.size=t.size,this.position>t.size&&(this.position=t.size),void(this.file=t);throw(0,s.Z)(k,(0,a.Z)(m("truncate requires a size argument")))}}e=new v([e]);var r=this.file,n=r.slice(0,this.position),i=r.slice(this.position+e.size),o=this.position-n.size;o<0&&(o=0),r=new w([n,new Uint8Array(o),e,i],r.name),this.size=r.size,this.position+=e.size,this.file=r}},{key:"close",value:function(){if(this.fileHandle._deleted)throw(0,s.Z)(k,(0,a.Z)(y));this.fileHandle._file=this.file,this.file=this.position=this.size=null,this.fileHandle.onclose&&this.fileHandle.onclose(this.fileHandle)}}]),e}(),H=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new w([],t),n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,o.Z)(this,e),this._file=r,this.name=t,this.kind="file",this._deleted=!1,this.writable=n,this.readable=!0}return(0,u.Z)(e,[{key:"getFile",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._deleted){e.next=2;break}throw(0,s.Z)(k,(0,a.Z)(y));case 2:return e.abrupt("return",this._file);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createWritable",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.writable){e.next=2;break}throw(0,s.Z)(k,(0,a.Z)(z));case 2:if(!this._deleted){e.next=4;break}throw(0,s.Z)(k,(0,a.Z)(y));case 4:if(!t.keepExistingData){e.next=10;break}return e.next=7,this.getFile();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=new w([],this.name);case 11:return r=e.t0,e.abrupt("return",new g(this,r));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isSameEntry",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this===t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_destroy",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._deleted=!0,this._file=null;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),E=function(){function e(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,o.Z)(this,e),this.name=t,this.kind="directory",this._deleted=!1,this._entries={},this.writable=r,this.readable=!0}return(0,u.Z)(e,[{key:"entries",value:function(){var e=this;return(0,c.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}throw(0,s.Z)(k,(0,a.Z)(y));case 2:return t.delegateYield(l((0,p.Z)(Object.entries(e._entries)),f.Z),"t0",3);case 3:case"end":return t.stop()}}),t)})))()}},{key:"isSameEntry",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this===t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDirectoryHandle",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(r,i){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._deleted){t.next=2;break}throw(0,s.Z)(k,(0,a.Z)(y));case 2:if(!(o=this._entries[r])){t.next=11;break}if(!(o instanceof H)){t.next=8;break}throw(0,s.Z)(k,(0,a.Z)(x));case 8:return t.abrupt("return",o);case 9:t.next=16;break;case 11:if(!i.create){t.next=15;break}return t.abrupt("return",this._entries[r]=new e(r));case 15:throw(0,s.Z)(k,(0,a.Z)(y));case 16:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"getFileHandle",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this._entries[t],o=i instanceof H,!i||!o){e.next=4;break}return e.abrupt("return",i);case 4:if(!i||o){e.next=6;break}throw(0,s.Z)(k,(0,a.Z)(x));case 6:if(i||r.create){e.next=8;break}throw(0,s.Z)(k,(0,a.Z)(y));case 8:if(i||!r.create){e.next=10;break}return e.abrupt("return",this._entries[t]=new H(t));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"removeEntry",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this._entries[t]){e.next=3;break}throw(0,s.Z)(k,(0,a.Z)(y));case 3:return e.next=5,i._destroy(r.recursive);case 5:delete this._entries[t];case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_destroy",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0,i=Object.values(this._entries);case 1:if(!(r<i.length)){e.next=10;break}if(o=i[r],t){e.next=5;break}throw(0,s.Z)(k,(0,a.Z)(_));case 5:return e.next=7,o._destroy(t);case 7:r++,e.next=1;break;case 10:this._entries={},this._deleted=!0;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=new E(""),I=function(){return S}}}]);