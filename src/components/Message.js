const Message = ({notes}) => {
    return(
        <div>
        {notes.length === 0 ? (
            <div className="note">
                <p className="message">Tidak ada catatan.</p>
            </div>
        ) : (
          <div>
            
          </div>
        )}
      </div>
    )
}

export default Message;