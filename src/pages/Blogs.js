import BasicFormExample from "./bootstrap/BasicFormExample";
const mystyle = {
  margin: "auto",
  width: "50%",
  border: "3px solid green",
  padding: "10px"
};
const Blogs = () => {

  return (
    <div style={mystyle}>
      <h1>Blog</h1>
      <BasicFormExample/>
    </div>
  )

 
  };
  
  export default Blogs;