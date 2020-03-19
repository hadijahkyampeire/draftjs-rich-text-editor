import React from 'react';

export const PreviewModal = ({ output }) => (
  <div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Preview Modal
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" dangerouslySetInnerHTML={{ __html: output }} />
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
);
