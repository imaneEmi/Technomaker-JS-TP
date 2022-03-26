describe("Forms test", () => {
    it('POST-Create user',()=>{
        var country = {
            "country": "qatar",
        }

        cy.request('POST','/universities',country).then((response)=>{
            console.log(response)
           
        })
        //cy.request('POST','/users',user).its('body').should('include',{name:'Vandana Yadav'})
    })

})