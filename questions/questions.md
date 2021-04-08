*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  


  
--


*Answer 1*

Dear Marissa,

Thank you for your note and we understand your frusteration, any slowdown on the platform can be quite an inconvenience and we are well aware of that. 

The reason that the dashboard has been designed this way is to add extra safety precautions, to prevent users from accidentally clearing deleting their indexes. We understand that creating an index can be quite time consuming, and we do not want our users hard work to be lost due to one click of the mouse. We weighed the pros and cons of making this update to the dashboard, and we found it to be worth the extra clicks to protect our users from losing their index data. Thank you again for your feedback and I hope this helps to explain the dashboard design change.

Best,
Jason

--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

  
--

*Answer 2*

Dear Carrie,

Algolia will limit the size of individual records in order to maximize system performance. We set a limit of 100kb for any individual record, and 10kb average record size arcross all records.

When you see the "Record is too big" error, there are two main ways to decrease record size:
    1. Recommended approach: If any of the meta is not useful for either searching, faceting, ranking, or display, then it’s safe to remove from your records on Algolia.
    2. Split your records into smaller chunks and use Algolia's distinct feature to only display the best result. 

For your use case, we recommend approach #1. You mentioned that every record is enriched with a lot of meta that is not for search, so any of that can be removed from your records. For more information, please refer to our documentation on simplifying your record structure: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/

Best,
Jason

--


*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

__

*Answer 3*

Dear Marc,

We would be happy to help support this issue. In order for us to troubleshoot, could you please provide us the following information:

 - Code snippet which is causing the error
 - Brief description of the project that you are working on, and how algolia is being utilized
 - Any guides or instructions that you are working off of
 - Algolia username

Looking forward to your response. If a live call would be easier, we are more then happy to do a screenshare and work through the issue: feel free to send your availability

Best,
Jason


