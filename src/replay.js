const {open,replay,summary}=require('./core'); const db=open(); console.log(JSON.stringify({replay:replay(db),summary:summary(db)},null,2));
