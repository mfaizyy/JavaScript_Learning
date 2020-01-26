 //fibonacci series is 0+1 1+1 1+2 2+3...
 var i=0,j=1,k;
 while (i<40) {
     document.write(i + "<br />");
     k=i+j;
     i=j;
     j=k;
 }